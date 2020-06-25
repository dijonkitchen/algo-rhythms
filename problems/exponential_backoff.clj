(ns exponential-backoff)

(defn exponential-backoff
  [operation
   duration-ms
   max-retries
   jitter]
  (when (< 0 max-retries)
    (try
      (println "Retries left" (dec max-retries))
      (operation)
      (println "Success!")
      (catch Exception e
        (println "Exponential backoff duration of" duration-ms)
        (Thread/sleep duration-ms)
        (let [backoff (-> duration-ms
                          (* 2)
                          (+ (rand jitter)))]
          (exponential-backoff operation
                               backoff
                               (dec max-retries)
                               jitter))))))

(defn failing-operation []
  (throw (ex-info "always throws" {})))

(comment
  (exponential-backoff failing-operation
                       10
                       10
                       5)
  ;; Example:
  ;; Retries left 9
  ;; Exponential backoff duration of 10
  ;; Retries left 8
  ;; Exponential backoff duration of 24.250478831360596
  ;; Retries left 7
  ;; Exponential backoff duration of 52.51094210210961
  ;; Retries left 6
  ;; Exponential backoff duration of 108.39201820138487
  ;; Retries left 5
  ;; Exponential backoff duration of 217.19192547775788
  ;; Retries left 4
  ;; Exponential backoff duration of 436.3977265967169
  ;; Retries left 3
  ;; Exponential backoff duration of 873.8635232451135
  ;; Retries left 2
  ;; Exponential backoff duration of 1750.2317017347737
  ;; Retries left 1
  ;; Exponential backoff duration of 3501.2434960980677
  ;; Retries left 0
  ;; Exponential backoff duration of 7003.486900792739
  )
