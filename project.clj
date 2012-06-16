(defproject enfocus.demo "1.0.0-SNAPSHOT"
  :description "FIXME: write description"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [ring "1.0.1"]
                 [enfocus "0.9.1-SNAPSHOT"]]
    :cljsbuild {
      :builds [{
         :source-path "src"
                :compiler {:output-to "resources/public/cljs/bootstrap.js"
                           :optimizations :advanced
                           :pretty-print false}}]})
