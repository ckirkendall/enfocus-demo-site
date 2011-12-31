(ns enfocus.demo.site
  (:require [enfocus.core :as ef]
            [goog.dom :as dom])
  (:require-macros [enfocus.macros :as em]))

(em/deftemplate home "templates/home.html" [])

(em/defaction setup-pane [width height]
              ["#menu"] (em/delay 1000 (em/do->
                                         (em/set-style :display "inline")
                                         (em/fade-in 1000 20)))
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
      (em/at js/window (em/add-event :resize resize-content-pane))))

(em/defaction start [] 
              ["#inner-circle"] (em/add-event :click init-content-pane)
              [".marea"] (em/add-event 
                           :mouseenter
                           #(em/at (.currentTarget %)
                                   [".sub"] (em/resize :curwidth 85 500 20)
                                   ["h3"] (em/do-> (em/add-class "blur-highlight")
                                                   (em/delay 200 (em/remove-class "blur-highlight")))))
              [".marea"] (em/add-event 
                           :mouseleave
                           #(em/at (.currentTarget %)
                                   [".sub"] (em/resize :curwidth 0 500 20))))
              


(set! (.onload js/window) #(start))