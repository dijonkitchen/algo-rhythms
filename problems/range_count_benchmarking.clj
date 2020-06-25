(ns range-count-benchmarking
  (:require
   [clojure.spec.alpha :as s]
   [clojure.spec.gen.alpha :as gen]))

(defn occurrences-linear [collection value]
  (->> collection
       (filter #(= value %))
       count))

(defn binary-search [sorted-collection
                     value
                     left-index
                     right-index]
  (let [mid-index (-> right-index
                      (- left-index)
                      (/ 2)
                      (+ left-index)
                      int)
        mid-value (get sorted-collection mid-index)]
    (cond
      (< right-index left-index) nil
      (= value mid-value)        mid-index
      (< value mid-value)        (binary-search sorted-collection
                                                value
                                                left-index
                                                (dec mid-index))
      (< mid-value value)        (binary-search sorted-collection
                                                value
                                                (inc mid-index)
                                                right-index))))

(defn min-location [sorted-collection
                    value
                    left-index
                    right-index
                    guess-index
                    exists?]
  (let [mid-index (-> right-index
                      (- left-index)
                      (/ 2)
                      (+ left-index)
                      int)
        mid-value (get sorted-collection mid-index)
        exist    (or exists? (= value mid-value))]
    (cond
      (< right-index left-index) (when exist
                                   guess-index)
      (<= value mid-value)        (min-location sorted-collection
                                                value
                                                left-index
                                                (dec mid-index)
                                                mid-index
                                                exist)
      (< mid-value value)        (min-location sorted-collection
                                               value
                                               (inc mid-index)
                                               right-index
                                               mid-index
                                               exist))))

(defn max-location [sorted-collection
                    value
                    left-index
                    right-index
                    guess-index
                    exists?]
  (let [mid-index (-> right-index
                      (- left-index)
                      (/ 2)
                      (+ left-index)
                      int)
        mid-value (get sorted-collection mid-index)
        exist    (or exists? (= value mid-value))]
    (cond
      (< right-index left-index) (when exist
                                   guess-index)
      (< value mid-value)        (max-location sorted-collection
                                                value
                                                left-index
                                                (dec mid-index)
                                                mid-index
                                                exist)
      (<= mid-value value)        (max-location sorted-collection
                                               value
                                               (inc mid-index)
                                               right-index
                                               (inc mid-index)
                                               exist))))

(comment
  (max-location [1, 1, 2, 4, 5, 5, 7, 9] 2 0 7 nil false)
  (min-location [1, 1, 2, 4, 5, 5, 7, 9] 2 0 7 nil false))

(defn occurrences-binary [sorted-collection value]
  (if-let [right (max-location sorted-collection
                               value
                               0
                               (-> sorted-collection
                                   count
                                   dec)
                               nil
                               false)]
    (if-let [left (min-location sorted-collection
                                value
                                0
                                (-> sorted-collection
                                    count
                                    dec)
                                nil
                                true)]
      (- right left))
    0))

(comment
  (binary-search [1, 1, 2, 4, 5, 5, 7, 9] 1 0 7)
  (occurrences-linear [1, 1, 2, 4, 5, 5, 7, 9] 5)
  (occurrences-binary [1, 1, 2, 4, 5, 5, 7, 9] -90)


  (max-location [1, 1, 2, 2, 3] 2 0 4 nil false)
  (min-location [1, 1, 2, 2, 3] 2 0 4 nil false)
  ;; incorrect
  (occurrences-binary [1, 1, 2, 2, 3] 2)

  (get (frequencies [1 2 3 4 3 3 1 1]) 1)

  (doseq [size (map #(Math/pow 10 %) (range 1 8))]
    (let [rand-sorted-collection (vec (sort (gen/sample (s/gen pos-int?) size)))]
      (println "occurences-linear with " size " size")
      (time (occurrences-linear rand-sorted-collection (rand-int size)))
      (println "occurences-binary with " size " size")
      (time (occurrences-binary rand-sorted-collection (rand-int size)))
      ;; (println "frequencies with " size " size")
      ;; (time (get (frequencies rand-sorted-collection) (rand-int size)))
      (println)))

  ;; occurences-linear with  10.0  size
  ;; "Elapsed time: 0.028123 msecs"
  ;; occurences-binary with  10.0  size
  ;; "Elapsed time: 0.089659 msecs"

  ;; occurences-linear with  100.0  size
  ;; "Elapsed time: 0.015253 msecs"
  ;; occurences-binary with  100.0  size
  ;; "Elapsed time: 0.092407 msecs"

  ;; occurences-linear with  1000.0  size
  ;; "Elapsed time: 0.102897 msecs"
  ;; occurences-binary with  1000.0  size
  ;; "Elapsed time: 0.091439 msecs"

  ;; occurences-linear with  10000.0  size
  ;; "Elapsed time: 0.453657 msecs"
  ;; occurences-binary with  10000.0  size
  ;; "Elapsed time: 0.14516 msecs"

  ;; occurences-linear with  100000.0  size
  ;; "Elapsed time: 8.438906 msecs"
  ;; occurences-binary with  100000.0  size
  ;; "Elapsed time: 0.196072 msecs"

  ;; occurences-linear with  1000000.0  size
  ;; "Elapsed time: 116.671491 msecs"
  ;; occurences-binary with  1000000.0  size
  ;; "Elapsed time: 0.283969 msecs"

  ;; occurences-linear with  1.0E7  size
  ;; "Elapsed time: 1181.352963 msecs"
  ;; occurences-binary with  1.0E7  size
  ;; "Elapsed time: 0.293488 msecs"

  ;; occurances-binary has much lower time complexity at O(log n) vs occurances-linear's O(n)
  )
