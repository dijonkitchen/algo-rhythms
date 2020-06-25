(ns dijonkitchen.symmetry
  (:require [clojure.test :refer [deftest
                                  testing
                                  is
                                  run-tests]]))

(defn horizontal-symmetry? [row]
  (= row
     (reverse row)))

(defn fully-horizontal? [matrix]
  (as-> matrix $
    (map horizontal-symmetry? $)
    (set $)
    (contains? $ false)
    (not $)))

(comment
  (horizontal-symmetry? ["a" "b" "a"])
  (horizontal-symmetry? ["x" "b" "a"])
  (map horizontal-symmetry? [["a" "b" "a"]
                             ["x" "b" "a"]])
  (fully-horizontal? [["a" "b" "a"]
                      ["x" "b" "a"]])
  (fully-horizontal? [["a" "b" "a"]
                      ["a" "b" "a"]]))

(defn vertical-symmetry? [matrix]
  (= matrix
     (reverse matrix)))

(comment
  (seq [[] []])
  (seq [[]])
  (vertical-symmetry? [[] []])
  (vertical-symmetry? [["a" "b"]
                       ["b" "a"]
                       ["a" "b"]]))

(defn classify [matrix]
  (let [vertical?   (vertical-symmetry? matrix)
        horizontal? (fully-horizontal? matrix)]
    (cond
      (and vertical? horizontal?) :perfect
      vertical?                   :vertical
      horizontal?                 :horizontal
      :else                       :imperfect)))

(deftest classify-test
  (testing "exists"
    (is classify))
  (testing "takes matrix"
    (is (classify [[]])))
  (testing "takes matrix"
    (is (classify [[]])))
  (testing "takes matrix"
    (is (= :horizontal
           (classify [["a" "b" "a"]
                      ["x" "y" "x"]])))
    (is (= :vertical
           (classify [["a" "b" "c"]])))
    (is (= :perfect
           (classify [["a" "b" "a"]
                      ["y" "X" "y"]
                      ["a" "b" "a"]])))))

(comment
  (run-tests))
