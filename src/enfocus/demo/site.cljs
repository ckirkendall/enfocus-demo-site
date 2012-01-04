(ns enfocus.demo.site
  (:require [enfocus.core :as ef]
            [goog.dom :as dom])
  (:require-macros [enfocus.macros :as em]))

(declare home 
         home-page 
         gstarted-page
         doc-trans-page)

(defn scroll-to []
  (ef/chainable-standard
    (fn [nod]
      (. nod (scrollIntoView)))))


(em/defaction setup-pane [width height]
              ["#menu"] (em/delay 1000 (em/do->
                                         (em/set-style :display "inline")
                                         (em/fade-in 1000 20)))
              ["#home-button"] (em/listen :click home-page)
              ["#gstarted-button"] (em/listen :click gstarted-page)
              ["#doc-trans"] (em/listen :click doc-trans-page)
              ["#content-pane"] (em/chain
                                  (em/resize 5 height 500 20)
                                  (em/resize width :curheight 500 20 )
                                  (em/content (home))))


              
(em/defaction resize-pane [width height]
              ["#content-pane"] (em/do->
                                  (em/resize width height 200 20))) 

(defn resize-content-pane []
  (let [size (dom/getViewportSize)
        width (- (.width size) 40)
        height (- (.height size) 70)]
    (resize-pane width height)))

  
(defn init-content-pane []
    (let [size (dom/getViewportSize)
          width (- (.width size) 40)
          height (- (.height size) 70)]
      (setup-pane width height)
      (em/at js/window (em/listen :resize resize-content-pane))))

(em/defaction start [] 
              ["#inner-circle"] (em/listen :click init-content-pane)
              [".marea"] (em/listen 
                           :mouseenter
                           #(em/at (.currentTarget %)
                                   [".sub"] (em/resize :curwidth 115 500 20)
                                   ["h3"] (em/do-> (em/add-class "blur-highlight")
                                                   (em/delay 200 (em/remove-class "blur-highlight")))))
              [".marea"] (em/listen 
                           :mouseleave
                           #(em/at (.currentTarget %)
                                   [".sub"] (em/resize :curwidth 0 500 20))))
              


(set! (.onload js/window) start)


;#######################################
; home page actions
;#######################################

(em/deftemplate home "templates/home.html" [])

(em/defaction home-page []
  ["#content-pane"] (em/content (home)))


;#######################################
; quick start page actions
;#######################################

(em/deftemplate gstarted "templates/getting-started.html" [])

(em/defaction gstarted-page []
  ["#content-pane"] (em/content (gstarted))  
  ["#button1"] (em/listen 
                 :click 
                 #(em/at (.currentTarget %) 
                         (em/content "I have been clicked")))
  ["#button2"] (em/listen 
                 :click 
                 #(em/at js/document 
                         ["#rz-demo"] (em/chain 
                                       (em/resize 200 :curheight 500 20)
                                       (em/resize 5 :curheight 500 20)))))

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

(em/defaction doc-trans-page []
  ["#content-pane"] (em/content (doc-trans))
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
  ["#button17"] (em/listen :click remove-style-demo))

;########################################
; handling events page actions
;########################################

