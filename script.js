// * Implementation of the Insertion Sort algorithm.

 function insertionSort(array) {
        // Start from the second element (index 1) since the first element is trivially sorted.
        for (let i = 1; i < array.length; i++) {
            // Store the current element to be inserted into the sorted portion of the array.
            let key = array[i];
            
            // Initialize the index of the previous element.
            let j = i - 1;
            
            // Shift elements greater than the key to the right to make room for the key.
            while (j >= 0 && array[j] > key) {
                // Move the element at index j to the right.
                array[j + 1] = array[j];
                // Decrement j to continue shifting elements.
                j = j - 1;
            }
            
            // Insert the key into its correct position.
            array[j + 1] = key;
        }
        
        // Return the sorted array.
        return array;
    }
   