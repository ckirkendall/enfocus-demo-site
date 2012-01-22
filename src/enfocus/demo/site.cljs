(ns enfocus.demo.site
  (:require [enfocus.core :as ef]
            [goog.dom :as dom])
  (:require-macros [enfocus.macros :as em]))

(declare home 
         home-page 
         gstarted-page
         doc-trans-page
         clone-for-demo
         get-attr-demo
         doc-templates-page
         doc-from-page)

(defn scroll-to []
  (ef/chainable-standard
    (fn [nod]
      (. nod (scrollIntoView)))))

(defn reset-scroll []
  (ef/chainable-standard
    (fn [nod]
      (set! (.-scrollTop nod) 0))))


(em/defaction setup-pane [width height]
              ["#menu"] (em/delay 1000 (em/do->
                                         (em/set-style :display "inline")
                                         (em/fade-in 1000)))
              ["#home-button"] (em/listen :click home-page)
              ["#gstarted-button"] (em/listen :click gstarted-page)
              ["#doc-trans"] (em/listen :click doc-trans-page)
              ["#doc-events"] (em/listen :click doc-events-page) 
              ["#doc-effects"] (em/listen :click doc-effects-page)
              ["#doc-remote"] (em/listen :click doc-template-page)
              ["#doc-extract"] (em/listen :click doc-from-page)
              ["#content-pane"] (em/chain
                                  (em/resize 5 height 500)
                                  (em/resize width :curheight 500)
                                  (em/content (home))))


              
(em/defaction resize-pane [width height]
              ["#content-pane"] (em/do->
                                  (em/resize width height 200))) 

(defn resize-content-pane []
  (let [size (dom/getViewportSize)
        width (- (.-width size) 40)
        height (- (.-height size) 70)]
    (resize-pane width height)))

  
(defn init-content-pane []
    (let [size (dom/getViewportSize)
          width (- (.-width size) 40)
          height (- (.-height size) 70)]
      (setup-pane width height)
      (em/at js/window (em/listen :resize resize-content-pane))))

(em/defaction start [] 
              ["#inner-circle"] (em/listen :click init-content-pane)
              [".marea"] (em/listen 
                           :mouseenter
                           #(em/at (.-currentTarget %)
                                   [".sub"] (em/resize :curwidth 145 500)
                                   ["h3"] (em/do-> (em/add-class "blur-highlight")
                                                   (em/delay 200 (em/remove-class "blur-highlight")))))
              [".marea"] (em/listen 
                           :mouseleave
                           #(em/at (.-currentTarget %)
                                   [".sub"] (em/resize :curwidth 0 500))))
              


(set! (.-onload js/window) start)


;#######################################
; home page actions
;#######################################

(em/deftemplate home "templates/home.html" [])

(em/defaction home-page []
  ["#content-pane"] (em/do->
                      (em/content (home))
                      (reset-scroll)))


;#######################################
; quick start page actions
;#######################################

(em/deftemplate gstarted "templates/getting-started.html" [])

(em/defaction gstarted-page []
  ["#content-pane"] (em/do->
                      (em/content (gstarted))
                      (reset-scroll))
  ["#button1"] (em/listen 
                 :click 
                 #(em/at (.-currentTarget %) 
                         (em/content "I have been clicked")))
  ["#button2"] (em/listen 
                 :click 
                 #(em/at js/document 
                         ["#rz-demo"] (em/chain 
                                       (em/resize 200 :curheight 500)
                                       (em/resize 5 :curheight 500))))
  ["#button3"] (em/listen :click clone-for-demo)
  ["#button4"] (em/listen :click get-prop-demo))

;########################################
; standard transform page actions
;########################################

(em/deftemplate doc-trans "templates/standard-transforms.html" [])

(em/defaction content-demo []
  ["#button1"] (em/content "I have been clicked"))

(em/defaction html-content-demo []
  ["#html-content-demo"] (em/html-content "<span style='color: #ff3333'>I replaced the text</span>"))

(em/defaction set-attr-demo []
  ["#button3"] (em/set-attr :foo "bar"))

(em/defaction remove-attr-demo []
  ["#button4"] (em/remove-attr :foo)) 

(em/defaction add-class-demo []
  ["#button5"] (em/add-class "highlight")) 

(em/defaction remove-class-demo []
  ["#button6"] (em/remove-class "highlight")) 

(em/defaction do-demo []
  ["#button7"] (em/do->
                 (em/set-attr :foo "bar")
                 (em/add-class "highlight")))

(em/defaction append-demo []
  ["#button8"] (em/append ":append"))

(em/defaction prepend-demo []
  ["#button9"] (em/prepend "prepend:"))

(em/defaction after-demo []
  ["#button10"] (em/after ":after"))

(em/defaction before-demo []
  ["#button11"] (em/before "before:"))

(em/defaction sub-demo []
  ["#button12"] (em/substitute "I replaced the button")) 

(defn clone-for-demo []
  (let [fruit-data {"apple" 5, "pear" 6}]
    (em/at js/document
       ["#clone-for-demo tbody > tr:first-child"] 
         (em/clone-for [fr (vec fruit-data)]
            ["*:first-child"] (em/content (first fr))
            ["*:last-child"] (em/content (str (second fr)))))))

(em/defaction wrap-demo []
  ["#button14"] (em/wrap :span {:class "highlight"}))  

(em/defaction unwrap-demo []
  ["#button15"] (em/unwrap)) 

(em/defaction set-style-demo []
  ["#button16"] (em/set-style :border "2px solid blue"))   

(em/defaction remove-style-demo []
  ["#button17"] (em/remove-style :border))

(em/defaction filter-demo []
  ["#email-field"] (em/filter #(> 0 (. (.-value %) (indexOf "@")))
  					 (em/set-style :background-color "red"))
  ["#email-field"] (em/filter #(<= 0 (. (.-value %) (indexOf "@")))
  					 (em/set-style :background-color "green")))  

(em/defaction doc-trans-page [] 
  ["#content-pane"] (em/do->
                      (em/content (doc-trans))
                      (reset-scroll))
  ["#at-link"] (em/listen :click #(em/at js/document ["#doc-at"] (scroll-to)))         
  ["#content-link"] (em/listen :click #(em/at js/document ["#doc-content"] (scroll-to)))         
  ["#html-content-link"] (em/listen :click #(em/at js/document ["#doc-html-content"] (scroll-to)))
  ["#set-attr-link"] (em/listen :click #(em/at js/document ["#doc-set-attr"] (scroll-to)))
  ["#remove-attr-link"] (em/listen :click #(em/at js/document ["#doc-remove-attr"] (scroll-to)))
  ["#add-class-link"] (em/listen :click #(em/at js/document ["#doc-add-class"] (scroll-to)))
  ["#remove-class-link"] (em/listen :click #(em/at js/document ["#doc-remove-class"] (scroll-to)))
  ["#do-link"] (em/listen :click #(em/at js/document ["#doc-do"] (scroll-to)))
  ["#append-link"] (em/listen :click #(em/at js/document ["#doc-append"] (scroll-to)))
  ["#prepend-link"] (em/listen :click #(em/at js/document ["#doc-prepend"] (scroll-to)))
  ["#after-link"] (em/listen :click #(em/at js/document ["#doc-after"] (scroll-to)))
  ["#before-link"] (em/listen :click #(em/at js/document ["#doc-before"] (scroll-to)))
  ["#substitute-link"] (em/listen :click #(em/at js/document ["#doc-sub"] (scroll-to)))
  ["#clone-for-link"] (em/listen :click #(em/at js/document ["#doc-clone-for"] (scroll-to)))
  ["#wrap-link"] (em/listen :click #(em/at js/document ["#doc-wrap"] (scroll-to)))
  ["#unwrap-link"] (em/listen :click #(em/at js/document ["#doc-unwrap"] (scroll-to)))
  ["#set-style-link"] (em/listen :click #(em/at js/document ["#doc-set-style"] (scroll-to)))
  ["#remove-style-link"] (em/listen :click #(em/at js/document ["#doc-remove-style"] (scroll-to)))
  ["#filter-link"] (em/listen :click #(em/at js/document ["#doc-filter"] (scroll-to)))
  ["#button1"] (em/listen :click content-demo)
  ["#button2"] (em/listen :click html-content-demo)
  ["#button3"] (em/listen :click set-attr-demo)
  ["#button4"] (em/listen :click remove-attr-demo) 
  ["#button5"] (em/listen :click add-class-demo) 
  ["#button6"] (em/listen :click remove-class-demo)
  ["#button7"] (em/listen :click do-demo)
  ["#button8"] (em/listen :click append-demo)
  ["#button9"] (em/listen :click prepend-demo)
  ["#button10"] (em/listen :click after-demo)
  ["#button11"] (em/listen :click before-demo)
  ["#button12"] (em/listen :click sub-demo)
  ["#button13"] (em/listen :click clone-for-demo)
  ["#button14"] (em/listen :click wrap-demo)
  ["#button15"] (em/listen :click unwrap-demo)
  ["#button16"] (em/listen :click set-style-demo)
  ["#button17"] (em/listen :click remove-style-demo)
  ["#button18"] (em/listen :click filter-demo))

;########################################
; handling events page actions
;########################################

(em/deftemplate doc-event "templates/handling-events.html" [])


(em/defaction remove-demo []
  ["#remove-demo"] (em/remove-listener :mouseenter :mouseleave))

(em/defaction doc-events-page []
  ["#content-pane"] (em/do->
                      (em/content (doc-event))
                      (reset-scroll))
  ["#listen-link"] (em/listen :click #(em/at js/document ["#doc-listen"] (scroll-to)))         
  ["#remove-link"] (em/listen :click #(em/at js/document ["#doc-remove"] (scroll-to)))         
  ["#support-link"] (em/listen :click #(em/at js/document ["#doc-support"] (scroll-to)))
  ["#button1"] (em/listen :click 
                          #(em/at (.-currentTarget %) 
                             (em/content "I have been replaced")))
  ["#remove-demo"] (em/do->
                     (em/listen :mouseenter #(em/at (.-currentTarget %) (em/add-class "highlight"))) 
                     (em/listen :mouseleave #(em/at (.-currentTarget %) (em/remove-class "highlight"))))
  ["#button2"] (em/listen :click remove-demo))     


;########################################
; effects and timing page actions
;########################################

(em/deftemplate doc-effect "templates/effects-timing.html" [])

(em/defaction resize-demo [] 
  ["#rz-demo"] (em/resize 200 :curheight 500
                 (em/resize 5 :curheight 500)))       

(em/defaction move-demo [] 
  ["#mv-demo"] (em/move 300 :cury 500
                 (em/move -20 :cury 500)))

(em/defaction fade-demo [] 
  ["#fade-demo"] (em/fade-out 500
                   (em/fade-in 500)))

(em/defaction delay-demo [] 
  ["#delay-demo"] (em/do-> (em/resize 200 :curheight 500)
                           (em/delay 2000 (em/resize 50 :curheight 500))))

(em/defaction chain-demo [] 
  ["#chain-demo"] (em/chain (em/resize 200 :curheight 500)
                            (em/resize 5 :curheight 500)))

(em/defaction doc-effects-page []
  ["#content-pane"] (em/do->
                      (em/content (doc-effect))
                      (reset-scroll))
  ["#resize-link"] (em/listen :click #(em/at js/document ["#doc-resize"] (scroll-to)))         
  ["#move-link"] (em/listen :click #(em/at js/document ["#doc-move"] (scroll-to)))         
  ["#fade-link"] (em/listen :click #(em/at js/document ["#doc-fade"] (scroll-to)))         
  ["#delay-link"] (em/listen :click #(em/at js/document ["#doc-delay"] (scroll-to)))         
  ["#chain-link"] (em/listen :click #(em/at js/document ["#doc-chain"] (scroll-to)))
  ["#button1"] (em/listen :click resize-demo)
  ["#button2"] (em/listen :click move-demo)
  ["#button3"] (em/listen :click fade-demo)
  ["#button4"] (em/listen :click delay-demo)
  ["#button5"] (em/listen :click chain-demo))   


;########################################
; templates and snippets actions
;########################################

(em/deftemplate doc-template "templates/templates-snippets.html" [])

(em/deftemplate template-demo "templates/template-demo.html" [fruit-data] 
                ["#heading1"] (em/content "fruit")  
                ["thead tr > *:last-child"] (em/content "quantity")
                ["tbody > tr:not(:first-child)"] (em/remove-node)
                ["tfoot tr > *:last-child"] (em/content (str (apply + (vals fruit-data))))
                ["tbody > tr:first-child"] (em/clone-for [fr (vec fruit-data)]
                                              ["*:first-child"] (em/content (first fr))
                                              ["*:last-child"] (em/content (str (second fr)))))

(em/defsnippet snippet2 "templates/template-demo.html" ["tbody > *:first-child"] 
               [fruit quantity] 
               ["tr > *:first-child"] (em/content fruit)
               ["tr > *:last-child"] (em/content (str quantity)))
  
(em/deftemplate template-demo2 "templates/template-demo.html" [fruit-data] 
                ["#heading1"] (em/content "fruit")  
                ["thead tr > *:last-child"] (em/content "quantity")
                ["tfoot tr > *:last-child"] (em/content (str (apply + (vals fruit-data))))
                ["tbody"] (em/content
                           (map #(snippet2 % (fruit-data %)) (keys fruit-data)))) 

(em/defaction doc-template-page []
  ["#content-pane"] (em/do->
                      (em/content (doc-template))
                      (reset-scroll))         
  ["#template-link"] (em/listen :click #(em/at js/document ["#doc-template"] (scroll-to)))         
  ["#snippet-link"] (em/listen :click #(em/at js/document ["#doc-snippet"] (scroll-to)))         
  ["#load-link"] (em/listen :click #(em/at js/document ["#doc-load"] (scroll-to)))
  ["#button1"] (em/listen :click #(em/at js/document 
                                    ["#template-demo"] (em/content (template-demo {"apple" 8, "pear" 9}))))
  ["#button2"] (em/listen :click #(em/at js/document 
                                    ["#snippet-demo"] (em/content (template-demo2 {"apple" 6, "pear" 5})))))

;########################################
; templates and snippets actions
;########################################


(em/deftemplate doc-from "templates/data-extraction.html" [])

(defn get-prop-demo []
  (let [values (em/from js/document
                 :field1 ["#get-prop-field1"] (em/get-prop :value)
                 :field2 ["#get-prop-field2"] (em/get-prop :value)
                 :field3 ["input[name='get-prop-field3']"] (em/filter #(.-checked %)
                                                                   (em/get-prop :value)))]
      (em/at js/document
        ["#get-prop-demo"] (em/content (pr-str values)))))

(defn get-attr-demo []
  (let [value (em/from (em/select ["#get-attr-img"]) (em/get-attr :src))]
      (em/at js/document
        ["#get-attr-demo"] (em/content (pr-str value)))))

(defn get-text-demo []
  (let [txt (em/from (em/select ["#button3"]) (em/get-text))]
    (em/at js/document 
      ["#get-text-demo"] (em/content txt))))

(em/defaction doc-from-page []
  ["#content-pane"] (em/do->
                      (em/content (doc-from))
                      (reset-scroll))         
  ["#from-link"] (em/listen :click #(em/at js/document ["#doc-from"] (scroll-to))) 
  ["#get-prop-link"] (em/listen :click #(em/at js/document ["#doc-get-prop"] (scroll-to)))         
  ["#get-attr-link"] (em/listen :click #(em/at js/document ["#doc-get-attr"] (scroll-to)))         
  ["#get-text-link"] (em/listen :click #(em/at js/document ["#doc-get-text"] (scroll-to)))
  ["#button1"] (em/listen :click get-prop-demo)
  ["#button2"] (em/listen :click get-attr-demo)
  ["#button3"] (em/listen :click get-text-demo))
  
  

    
