(defproject enfocus.demo "1.0.0-SNAPSHOT"
  :description "FIXME: write description"
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [ring "1.0.1"]
                 [enfocus "1.0.0-RC1"]]
  :dev-dependencies [[lein-cljsbuild "0.2.10"]]
    :cljsbuild {
      :builds [{
         :source-path "src"
                :compiler {:output-to "resources/public/cljs/bootstrap.js"
                           :optimizations :advanced 
                           :pretty-print false}}]})
