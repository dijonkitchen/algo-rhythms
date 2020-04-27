;; Reqs: Get number of paths for car in a square grid
;; Inputs: n size of grid axes
;; Outputs: number of possible paths
;; Assumptions: 
  ;; Car starts at (0, 0)
  ;; Destination (n - 1, n - 1)
  ;; Cannot cross diagonal 
    ;; If at point (i, j), i >= j
  ;; Can only go up/North or right/East one square at a time
  
;; Examples:
  ;; If n = 2
  ;; EN
  
  ;; If n = 3
  ;; EENN,
  ;; ENEN
  
  ;; If n = 4
  ;; Keep going East until max, then go North until max
  ;; Then loop back and and change last East direction to North
  ;; Repeat
  ;; EEENNN
  ;; EENENN
  ;; EENNEN
  ;; ENEENN
  ;; ENENEN
  
  ;; full square example:
  ;; :1 2
  ;; :2 4
  ;; :3 10

;; Pseudocode:
  ;; Get all combos for square
    ;; Split up length into smaller units to add up
  ;; Div by 2

  
  
(ns pramp.paths
  (:require 
    [clojure.test :refer :all]))

(def num-of-paths
  (memoize (fn [x y] ; O(n^2) space complexity
  (cond              ; O(1)
    (or (< x 0)
         (< y 0)) 0
    (and (< x y)) 0
    (and (= x 0)
         (= y 0)) 1
    :else (+ (num-of-paths (dec x) y) ; O(n^2) time complexity
             (num-of-paths x (dec y)))))))

(defn numOfPathsToDest [n] 
  (num-of-paths (dec n) (dec n)))

(deftest paths
  (testing "num of paths"
    (is (= 1 (numOfPathsToDest 1)))
    (is (= 1 (numOfPathsToDest 2)))
    (is (= 2 (numOfPathsToDest 3)))
    (is (= 5 (numOfPathsToDest 4)))))

(comment
  (run-tests))
