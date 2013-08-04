(ns enfocus.demo.site
  (:require [enfocus.core :as ef]
            [enfocus.effects :as effects]
            [enfocus.events :as ev]
            [goog.dom :as dom])
  (:require-macros [enfocus.macros :as em]))

(declare home 
         about-page 
         gstarted-page
         doc-trans-page
         doc-events-page
         doc-effects-page
         clone-for-demo
         get-attr-demo
         get-prop-demo
         doc-template-page
         doc-from-page)

(defn scroll-to []
  (fn [nod]
    (. nod (scrollIntoView))))

(defn reset-scroll []
  (fn [nod]
    (set! (.-scrollTop nod) 0)))

(defn highlight-code [] (js/prettyPrint))

(defn navigate [page]
  (fn [] (page) (highlight-code)))

(em/defaction setup-menu [width height]
  "#about-button" (ev/listen :click (navigate about-page))
  ".quick-start"  (ev/listen :click (navigate gstarted-page))
  "#doc-trans"    (ev/listen :click (navigate doc-trans-page))
  "#doc-events"   (ev/listen :click (navigate doc-events-page)) 
  "#doc-effects"  (ev/listen :click (navigate doc-effects-page))
  "#doc-remote"   (ev/listen :click (navigate doc-template-page))
  "#doc-extract"  (ev/listen :click (navigate doc-from-page)))


(set! (.-onload js/window) setup-menu)


;#######################################
; home page actions
;#######################################

(em/deftemplate about "templates/about.html" [])

(em/defaction about-page []
  "#content-pane" (ef/do->
                      (ef/content (about))
                      (reset-scroll)))


;#######################################
; quick start page actions
;#######################################

(em/deftemplate gstarted "templates/getting-started.html" [])

(em/defaction gstarted-page []
  "#content-pane" (ef/do->
                      (ef/content (gstarted))
                      (reset-scroll))
  "#button1" (ev/listen 
                 :click 
                 #(ef/at (.-currentTarget %) 
                         (ef/content "I have been clicked")))
  "#button2" (ev/listen 
                 :click 
                 #(ef/at "#rz-demo" (effects/chain 
                                     (effects/resize 200 :curheight 500)
                                     (effects/resize 5 :curheight 500))))
  "#button3" (ev/listen :click clone-for-demo)
  "#button4" (ev/listen :click read-form-demo))

;########################################
; standard transform page actions
;########################################

(em/deftemplate doc-trans "templates/standard-transforms.html" [])

(em/defaction content-demo []
  "#button1" (ef/content "I have been clicked"))

(em/defaction html-content-demo []
  "#html-content-demo" (ef/html-content "<span style='color: #ff3333'>I replaced the text</span>"))

(em/defaction set-attr-demo []
  "#button3" (ef/set-attr :foo "bar"))

(em/defaction remove-attr-demo []
  "#button4" (ef/remove-attr :foo)) 

(em/defaction add-class-demo []
  "#button5" (ef/add-class "highlight")) 

(em/defaction remove-class-demo []
  "#button6" (ef/remove-class "highlight")) 

(em/defaction do-demo []
  "#button7" (ef/do->
                 (ef/set-attr :foo "bar")
                 (ef/add-class "highlight")))

(em/defaction append-demo []
  "#button8" (ef/append ":append"))

(em/defaction prepend-demo []
  "#button9" (ef/prepend "prepend:"))

(em/defaction after-demo []
  "#button10" (ef/after ":after"))

(em/defaction before-demo []
  "#button11" (ef/before "before:"))

(em/defaction sub-demo []
  "#button12" (ef/substitute "I replaced the button")) 

(defn clone-for-demo []
  (let [fruit-data {"apple" 5, "pear" 6}]
    (ef/at "#clone-for-demo tbody > tr:first-child" 
         (em/clone-for [fr (vec fruit-data)]
            "*:first-child" (ef/content (first fr))
            "*:last-child" (ef/content (str (second fr)))))))

(em/defaction wrap-demo []
  "#button14" (ef/wrap :span {:class "highlight"}))  

(em/defaction unwrap-demo []
  "#button15" (ef/unwrap)) 

(em/defaction set-style-demo []
  "#button16" (ef/set-style :border "2px solid blue"))   

(em/defaction remove-style-demo []
  "#button17" (ef/remove-style :border))

(em/defaction filter-demo []
  "#email-field" (ef/filter #(> 0 (. (.-value %) (indexOf "@")))
  					 (ef/set-style :background-color "red"))
  "#email-field" (ef/filter #(<= 0 (. (.-value %) (indexOf "@")))
  					 (ef/set-style :background-color "green")))  

(em/defaction focus-demo []
  "#focus-field" (ef/focus))

(em/defaction blur-demo []
  "#focus-field" (ef/blur))

(em/defaction replace-vars-demo []
  "#rvar-example" (ef/replace-vars {:name "Kurt"}))


(em/defaction doc-trans-page [] 
  "#content-pane" (ef/do->
                      (ef/content (doc-trans))
                      (reset-scroll))
  "#at-link"  (ev/listen :click #(ef/at "#doc-at" (scroll-to)))         
  "#selector-link" (ev/listen :click #(ef/at "#doc-selectors" (scroll-to)))         
  "#content-link" (ev/listen :click #(ef/at "#doc-content" (scroll-to)))         
  "#html-content-link" (ev/listen :click #(ef/at "#doc-html-content" (scroll-to)))
  "#set-attr-link" (ev/listen :click #(ef/at "#doc-set-attr" (scroll-to)))
  "#remove-attr-link" (ev/listen :click #(ef/at "#doc-remove-attr" (scroll-to)))
  "#add-class-link" (ev/listen :click #(ef/at "#doc-add-class" (scroll-to)))
  "#remove-class-link" (ev/listen :click #(ef/at "#doc-remove-class" (scroll-to)))
  "#do-link" (ev/listen :click #(ef/at "#doc-do" (scroll-to)))
  "#append-link" (ev/listen :click #(ef/at "#doc-append" (scroll-to)))
  "#prepend-link" (ev/listen :click #(ef/at "#doc-prepend" (scroll-to)))
  "#after-link" (ev/listen :click #(ef/at "#doc-after" (scroll-to)))
  "#before-link" (ev/listen :click #(ef/at "#doc-before" (scroll-to)))
  "#substitute-link" (ev/listen :click #(ef/at "#doc-sub" (scroll-to)))
  "#clone-for-link" (ev/listen :click #(ef/at "#doc-clone-for" (scroll-to)))
  "#wrap-link" (ev/listen :click #(ef/at "#doc-wrap" (scroll-to)))
  "#unwrap-link" (ev/listen :click #(ef/at "#doc-unwrap" (scroll-to)))
  "#set-style-link" (ev/listen :click #(ef/at "#doc-set-style" (scroll-to)))
  "#remove-style-link" (ev/listen :click #(ef/at "#doc-remove-style" (scroll-to)))
  "#filter-link" (ev/listen :click #(ef/at "#doc-filter" (scroll-to)))
  "#focus-link" (ev/listen :click #(ef/at "#doc-focus" (scroll-to)))
  "#rvars-link" (ev/listen :click #(ef/at "#doc-rvars" (scroll-to)))
  "#set-data-link" (ev/listen :click #(ef/at "#doc-set-data" (scroll-to))) 
  "#button1" (ev/listen :click content-demo)
  "#button2" (ev/listen :click html-content-demo)
  "#button3" (ev/listen :click set-attr-demo)
  "#button4" (ev/listen :click remove-attr-demo) 
  "#button5" (ev/listen :click add-class-demo) 
  "#button6" (ev/listen :click remove-class-demo)
  "#button7" (ev/listen :click do-demo)
  "#button8" (ev/listen :click append-demo)
  "#button9" (ev/listen :click prepend-demo)
  "#button10" (ev/listen :click after-demo)
  "#button11" (ev/listen :click before-demo)
  "#button12" (ev/listen :click sub-demo)
  "#button13" (ev/listen :click clone-for-demo)
  "#button14" (ev/listen :click wrap-demo)
  "#button15" (ev/listen :click unwrap-demo)
  "#button16" (ev/listen :click set-style-demo)
  "#button17" (ev/listen :click remove-style-demo)
  "#button18" (ev/listen :click filter-demo)
  "#button19" (ev/listen :click focus-demo)
  "#button20" (ev/listen :click blur-demo)
  "#button21" (ev/listen :click replace-vars-demo))

;########################################
; handling events page actions
;########################################

(em/deftemplate doc-event "templates/handling-events.html" [])


(em/defaction remove-demo []
  "#remove-demo" (ev/remove-listeners :mouseenter :mouseleave))

(em/defaction doc-events-page []
  "#content-pane" (ef/do->
                      (ef/content (doc-event))
                      (reset-scroll))
  "#listen-link" (ev/listen :click #(ef/at "#doc-listen" (scroll-to)))         
  "#remove-link" (ev/listen :click #(ef/at "#doc-remove" (scroll-to)))         
  "#support-link" (ev/listen :click #(ef/at "#doc-support" (scroll-to)))
  "#button1" (ev/listen :click 
                          #(ef/at (.-currentTarget %) 
                             (ef/content "I have been replaced")))
  "#remove-demo" (ef/do->
                     (ev/listen :mouseenter #(ef/at (.-currentTarget %) (ef/add-class "highlight"))) 
                     (ev/listen :mouseleave #(ef/at (.-currentTarget %) (ef/remove-class "highlight"))))
  "#button2" (ev/listen :click remove-demo))     


;########################################
; effects and timing page actions
;########################################

(em/deftemplate doc-effect "templates/effects-timing.html" [])

(em/defaction resize-demo [] 
  "#rz-demo" (effects/resize 200 :curheight 500
                 (effects/resize 5 :curheight 500)))       

(em/defaction move-demo [] 
  "#mv-demo" (effects/move 300 :cury 500
                 (effects/move -20 :cury 500)))

(em/defaction fade-demo [] 
  "#fade-demo" (effects/fade-out 500
                   (effects/fade-in 500)))

(em/defaction delay-demo [] 
  "#delay-demo" (ef/do-> (effects/resize 200 :curheight 500)
                           (ef/delay 2000 (effects/resize 50 :curheight 500))))

(em/defaction chain-demo [] 
  "#chain-demo" (effects/chain (effects/resize 200 :curheight 500)
                                 (effects/resize 5 :curheight 500)))

(em/defaction doc-effects-page []
  "#content-pane" (ef/do->
                      (ef/content (doc-effect))
                      (reset-scroll))
  "#resize-link" (ev/listen :click #(ef/at "#doc-resize" (scroll-to)))         
  "#move-link" (ev/listen :click #(ef/at "#doc-move" (scroll-to)))         
  "#fade-link" (ev/listen :click #(ef/at "#doc-fade" (scroll-to)))         
  "#delay-link" (ev/listen :click #(ef/at "#doc-delay" (scroll-to)))         
  "#chain-link" (ev/listen :click #(ef/at "#doc-chain" (scroll-to)))
  "#button1" (ev/listen :click resize-demo)
  "#button2" (ev/listen :click move-demo)
  "#button3" (ev/listen :click fade-demo)
  "#button4" (ev/listen :click delay-demo)
  "#button5" (ev/listen :click chain-demo))   


;########################################
; templates and snippets actions
;########################################

(em/deftemplate doc-template "templates/templates-snippets.html" [])

(em/deftemplate template-demo "templates/template-demo.html" [fruit-data] 
  "#heading1" (ef/content "fruit")  
  "thead tr > *:last-child" (ef/content "quantity")
  "tbody > tr:not(:first-child)" (ef/remove-node)
  "tfoot tr > *:last-child" (ef/content (str (apply + (vals fruit-data))))
  "tbody > tr:first-child" (em/clone-for [fr (vec fruit-data)]
                                           "*:first-child" (ef/content (first fr))
                                           "*:last-child" (ef/content (str (second fr)))))

(em/defsnippet snippet2 "templates/template-demo.html" "tbody > *:first-child" 
  [fruit quantity] 
  "tr > *:first-child" (ef/content fruit)
  "tr > *:last-child" (ef/content (str quantity)))

(em/deftemplate template-demo2 "templates/template-demo.html" [fruit-data] 
  "#heading1" (ef/content "fruit")  
  "thead tr > *:last-child" (ef/content "quantity")
  "tfoot tr > *:last-child" (ef/content (str (apply + (vals fruit-data))))
  "tbody" (ef/content
           (map #(snippet2 % (fruit-data %)) (keys fruit-data))))

(defn my-hic-template [val]
  (ef/html [:tr '([:td "hiccup"] [:td "test"])]))

(em/defaction hiccup-demo []
  "#hic-demo tbody" (ef/append (my-hic-template "testing")))

 
(em/defaction doc-template-page []
  "#content-pane" (ef/do->
                     (ef/content (doc-template))
                     (reset-scroll))         
  "#template-link" (ev/listen :click #(ef/at "#doc-template" (scroll-to)))         
  "#snippet-link" (ev/listen :click #(ef/at "#doc-snippet" (scroll-to)))         
  "#load-link" (ev/listen :click #(ef/at "#doc-load" (scroll-to)))
  "#hiccup-link" (ev/listen :click #(ef/at "#doc-hiccup" (scroll-to)))
  "#button1" (ev/listen :click #(ef/at "#template-demo" (ef/content (template-demo {"apple" 8, "pear" 9}))))
  "#button2" (ev/listen :click #(ef/at "#snippet-demo" (ef/content (template-demo2 {"apple" 6, "pear" 5}))))
  "#button3" (ev/listen :click hiccup-demo))

;########################################
; templates and snippets actions
;########################################


(em/deftemplate doc-from "templates/data-extraction.html" [])

(defn get-prop-demo []
  (let [values (ef/from js/document
                        :field1 "#get-prop-field1" (ef/get-prop :value)
                        :field2 "#get-prop-field2" (ef/get-prop :value)
                        :field3 "input[name='get-prop-field3']" (ef/filter #(.-checked %)
                                                                             (ef/get-prop :value)))]
    (ef/at "#get-prop-demo" (ef/content (pr-str values)))))

(defn get-attr-demo []
  (let [value (ef/from "#get-attr-img" (ef/get-attr :src))]
    (ef/at "#get-attr-demo" (ef/content (pr-str value)))))

(defn get-text-demo []
  (let [txt (ef/from "#button3" (ef/get-text))]
    (ef/at "#get-text-demo" (ef/content txt))))

(defn read-form-demo []
  (let [values (ef/from "#read-form-test" (ef/read-form))]
      (ef/at "#read-form-demo" (ef/content (pr-str values)))))                    


(em/defaction doc-from-page []
  "#content-pane" (ef/do->
                     (ef/content (doc-from))
                     (reset-scroll))         
  "#from-link" (ev/listen :click #(ef/at "#doc-from" (scroll-to))) 
  "#get-prop-link" (ev/listen :click #(ef/at "#doc-get-prop" (scroll-to)))         
  "#get-attr-link" (ev/listen :click #(ef/at "#doc-get-attr" (scroll-to)))         
  "#get-text-link" (ev/listen :click #(ef/at "#doc-get-text" (scroll-to)))
  "#read-form-link" (ev/listen :click #(ef/at "#doc-read-form" (scroll-to)))
  "#button1" (ev/listen :click get-prop-demo)
  "#button2" (ev/listen :click get-attr-demo)
  "#button3" (ev/listen :click get-text-demo)
  "#button4" (ev/listen :click read-form-demo))




