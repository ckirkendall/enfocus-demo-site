(ns enfocus.demo.site
  (:require [enfocus.core :as ef]
            [enfocus.effects :as effects]
            [enfocus.events :as ev]
            [enfocus.bind :as bind]
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
         doc-from-page
         whats-new-page
         read-form-demo
         doc-view-binding-page)

(defn scroll-to []
  (fn [nod]
    (. nod (scrollIntoView))))

(defn reset-scroll []
  (fn [nod]
    (set! (.-scrollTop nod) 0)))

(defn highlight-code [] (js/prettyPrint))

(defn navigate [page]
  (page)
  (highlight-code)
  (.scrollTo js/window 0 0))


(defn navigation-watcher [ky atm oval nval]
  (condp = nval
    ""  (set!  (.-location js/document) "index.html")
    "about-page" (navigate about-page)
    "quick-start" (navigate gstarted-page)
    "doc-trans" (navigate doc-trans-page)
    "doc-events" (navigate doc-events-page)
    "doc-effects" (navigate doc-effects-page)
    "doc-template" (navigate doc-template-page)
    "doc-extract" (navigate doc-from-page)
    "whats-new" (navigate whats-new-page)
    "view-binding" (navigate doc-view-binding-page)
    (ef/log-debug (pr-str "ERROR IN NAVIGATION" oval nval))))

(def url-hash (atom ""))

(add-watch url-hash :nav navigation-watcher)

(defn update-hash [hash-key]
  (fn [event] 
    (.preventDefault event)
    (set! (.-hash (.-location js/document)) (str "#" (name hash-key)))))

(.setInterval
 js/window
 (fn []
   (let [ohash (.-hash (.-location js/document))
         hash (if ohash (.substring ohash 1) "")]
     (when (not (= @url-hash hash))
       (reset! url-hash hash))))
 50)

(em/defaction setup-menu [width height]
  "#about-button" (ev/listen :click (update-hash :about-page))
  ".quick-start"  (ev/listen :click (update-hash :quick-start))
  "#doc-trans"    (ev/listen :click (update-hash :doc-trans))
  "#doc-events"   (ev/listen :click (update-hash :doc-events)) 
  "#doc-effects"  (ev/listen :click (update-hash :doc-effects))
  "#doc-remote"   (ev/listen :click (update-hash :doc-template))
  "#doc-extract"  (ev/listen :click (update-hash :doc-extract))
  "#whats-new-btn"(ev/listen :click (update-hash :whats-new))
  "#doc-binding"  (ev/listen :click (update-hash :view-binding)))
 

(set! (.-onload js/window) setup-menu)


;#######################################
; home page actions
;#######################################

(em/deftemplate about :compiled "public/templates/about.html" [])

(em/defaction about-page []
  "#content-pane" (ef/do->
                      (ef/content (about))
                      (reset-scroll)))


;#######################################
; what's new page actions
;#######################################

(em/deftemplate whats-new :compiled "public/templates/whats-new.html" [])

(em/defaction whats-new-page []
  "#content-pane" (ef/do->
                      (ef/content (whats-new))
                      (reset-scroll)))



;#######################################
; quick start page actions
;#######################################

(em/deftemplate gstarted :compiled "public/templates/getting-started.html" [])

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

(em/deftemplate doc-trans :compiled "public/templates/standard-transforms.html" [])

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

(em/defaction remove-node-demo []
  "#button22" (ef/remove-node)) 


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
  "#rvar-example" (ef/replace-vars {:name "Kurt" :location "home"}))


(em/defaction set-form-demo []
  "#my-form" (ef/set-form {:input1 "Testing" 
                           :input2 #{"one" "two"}
                           :input3 #{"option1" "option3"}
                           :input4 "radio2"}))


(em/defaction set-input-demo []
  "input[name='field1']" (ef/set-form-input "Testing") 
  "select[name='field2']" (ef/set-form-input #{"one" "two"})
  "input[name='field3']" (ef/set-form-input #{"option1" "option3"})
  "input[name='field4']" (ef/set-form-input "radio3"))


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
  "#remove-node-link" (ev/listen :click #(ef/at "#doc-remove-node" (scroll-to)))
  "#clone-for-link" (ev/listen :click #(ef/at "#doc-clone-for" (scroll-to)))
  "#wrap-link" (ev/listen :click #(ef/at "#doc-wrap" (scroll-to)))
  "#unwrap-link" (ev/listen :click #(ef/at "#doc-unwrap" (scroll-to)))
  "#set-style-link" (ev/listen :click #(ef/at "#doc-set-style" (scroll-to)))
  "#remove-style-link" (ev/listen :click #(ef/at "#doc-remove-style" (scroll-to)))
  "#filter-link" (ev/listen :click #(ef/at "#doc-filter" (scroll-to)))
  "#focus-link" (ev/listen :click #(ef/at "#doc-focus" (scroll-to)))
  "#rvars-link" (ev/listen :click #(ef/at "#doc-rvars" (scroll-to)))
  "#set-data-link" (ev/listen :click #(ef/at "#doc-set-data" (scroll-to)))
  "#set-form-link" (ev/listen :click #(ef/at "#doc-set-form" (scroll-to)))
  "#set-input-link" (ev/listen :click #(ef/at "#doc-set-input" (scroll-to)))
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
  "#button21" (ev/listen :click replace-vars-demo)
  "#button22" (ev/listen :click remove-node-demo)
  "#button23" (ev/listen :click set-form-demo)
  "#button24" (ev/listen :click set-input-demo))

;########################################
; handling events page actions
;########################################

(em/deftemplate doc-event :compiled "public/templates/handling-events.html" [])


(em/defaction remove-demo []
  "#remove-demo" (ev/remove-listeners :mouseenter :mouseleave))

(em/defaction doc-events-page []
  "#content-pane" (ef/do->
                      (ef/content (doc-event))
                      (reset-scroll))
  "#listen-link" (ev/listen :click #(ef/at "#doc-listen" (scroll-to)))
  "#live-link" (ev/listen :click #(ef/at "#doc-listen-live" (scroll-to)))
  "#remove-link" (ev/listen :click #(ef/at "#doc-remove" (scroll-to)))         
  "#support-link" (ev/listen :click #(ef/at "#doc-support" (scroll-to)))
  "#button1" (ev/listen :click 
                          #(ef/at (.-currentTarget %) 
                                  (ef/content "I have been replaced")))
  "#doc-listen-live" (ev/listen-live :click "#button3" 
                                     #(ef/at (.-currentTarget %) 
                                             (ef/content "I have been replaced")))
  "#remove-demo" (ef/do->
                     (ev/listen :mouseenter #(ef/at (.-currentTarget %) (ef/add-class "highlight"))) 
                     (ev/listen :mouseleave #(ef/at (.-currentTarget %) (ef/remove-class "highlight"))))
  "#button2" (ev/listen :click remove-demo))     


;########################################
; effects and timing page actions
;########################################

(em/deftemplate doc-effect :compiled "public/templates/effects-timing.html" [])

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

(em/deftemplate doc-template :compiled "public/templates/templates-snippets.html" [])

(em/deftemplate template-demo :compiled "public/templates/template-demo.html" [fruit-data] 
  "#heading1" (ef/content "fruit")  
  "thead tr > *:last-child" (ef/content "quantity")
  "tbody > tr:not(:first-child)" (ef/remove-node)
  "tfoot tr > *:last-child" (ef/content (str (apply + (vals fruit-data))))
  "tbody > tr:first-child" (em/clone-for [fr (vec fruit-data)]
                                           "*:first-child" (ef/content (first fr))
                                           "*:last-child" (ef/content (str (second fr)))))

(em/defsnippet snippet2 :compiled "public/templates/template-demo.html" "tbody > *:first-child" 
  [fruit quantity] 
  "tr > *:first-child" (ef/content fruit)
  "tr > *:last-child" (ef/content (str quantity)))

(em/deftemplate template-demo2 :compiled "public/templates/template-demo.html" [fruit-data]
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
; extractor actions
;########################################


(em/deftemplate doc-from :compiled "public/templates/data-extraction.html" [])

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

(defn by-id [id]
  (.getElementById js/document id))

(defn read-input-demo []
  (let [val1 (ef/from "input[name='input1']" (ef/read-form-input))
        val2 (ef/from "input[name='input2']" (ef/read-form-input))
        val3 (ef/from "select[name='input3']" (ef/read-form-input))]
      (ef/at (by-id "read-input-demo") 
         ".input1" (ef/content (pr-str val1))
         ".input2" (ef/content (pr-str val2))
         ".input3" (ef/content (pr-str val3)))))

(em/defaction doc-from-page []
  "#content-pane" (ef/do->
                     (ef/content (doc-from))
                     (reset-scroll))         
  "#from-link" (ev/listen :click #(ef/at "#doc-from" (scroll-to))) 
  "#get-prop-link" (ev/listen :click #(ef/at "#doc-get-prop" (scroll-to)))         
  "#get-attr-link" (ev/listen :click #(ef/at "#doc-get-attr" (scroll-to)))         
  "#get-text-link" (ev/listen :click #(ef/at "#doc-get-text" (scroll-to)))
  "#read-form-link" (ev/listen :click #(ef/at "#doc-read-form" (scroll-to)))
  "#read-input-link" (ev/listen :click #(ef/at "#doc-read-input" (scroll-to)))
  "#button1" (ev/listen :click get-prop-demo)
  "#button2" (ev/listen :click get-attr-demo)
  "#button3" (ev/listen :click get-text-demo)
  "#button4" (ev/listen :click read-form-demo)
  "#input-demo-btn" (ev/listen :click read-input-demo))




;########################################
; view bindings actions
;########################################

(em/deftemplate doc-binding :compiled "public/templates/data-binding.html" [])

(def my-atom (atom {:first "Creighton" :last "Kirkendall"}))

(defn render-fn [node data]
  (ef/at node
    ".first" (ef/content (:first data))
    ".last"  (ef/content (:last data))))

(def my-data (atom {:input1 "type here"
                    :input2 #{"One" "Three"}}))

(defn input-render-fn [node data]
  (ef/at node
    ".input1" (ef/content (:input1 data))
    ".input2"  (ef/content (pr-str (:input2 data)))))


(def my-form-data (atom {:input1 "type here"
                         :input2 #{"One" "Three"}}))
 
(defn form-demo-render-fn [node data]
  (ef/at node
    ".form-input1" (ef/content (:input1 data))
    ".form-input2"  (ef/content (pr-str (:input2 data)))))

(em/defaction doc-view-binding-page [] 
  "#content-pane" (ef/do->
                     (ef/content (doc-binding)))         
  "#bind-view-link" (ev/listen :click
                               #(ef/at "#doc-bind-view" (scroll-to))) 
  "#bind-input-link" (ev/listen :click
                                #(ef/at "#doc-bind-input" (scroll-to)))  
  "#bind-form-link" (ev/listen :click
                               #(ef/at "#doc-bind-form" (scroll-to)))
  "#bind-view-demo" (bind/bind-view my-atom render-fn)
  "#button1" (ev/listen :click 
                        #(reset! my-atom {:first "Abby"
                                          :last  "Grace"}))
  "#bind-input-demo" (bind/bind-view my-data input-render-fn)
  "#my-input" (bind/bind-input my-data {:event :keyup
                                        :mapping [:input1]})
  "#my-select" (bind/bind-input my-data {:event :change
                                        :mapping [:input2]})
  "#bind-form-demo" (bind/bind-view my-form-data form-demo-render-fn)
  "#my-form" (bind/bind-form my-form-data))
