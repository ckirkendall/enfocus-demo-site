(ns enfocus.demo.core
  (:use ring.adapter.jetty
        ring.middleware.file
        ring.handler.dump))


(def app
  (wrap-file handle-dump "resources/public"))

 
 
(defn -main []
  (let [port (Integer/parseInt (System/getenv "PORT"))]
    (run-jetty app {:port port})))