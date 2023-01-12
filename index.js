/* 
    Receive a gsheet array as input in the form of
    [
        ['header a', 'header b', 'header c'],
        ['value 1 a', 'value 1 b', 'value 1 c'],
        ['value 2 a', 'value 2 b', 'value 2 c'],
    ]
    
    Output the corresponding json object associated
    [
        {
            'header a': 'value 1 a',
            'header b': 'value 1 b',
            'header c': 'value 1 c'
        },
        {
            'header a': 'value 2 a',
            'header b': 'value 2 b',
            'header c': 'value 2 c'
        }
    ]
*/
let converter =  (gsheet_array) => {
    // array containing the jsons
    let final_object = []

    // iterate over the gsheet array receives from 1 to end
    for (let row_values = 1; row_values < gsheet_array.length; row_values++) {
        // each row in the gheet array will represent an object
        const row = gsheet_array[row_values]
        // store the index of the headers
        let index_keys  = 0
        // create a temporary object holding to hold the values of each row
        let temp_object = {}
        
        // loop over each row 
        for (let index_value = 0; index_value < row.length; index_value++) {
            // get each value and assign it as a value to the respective key
            const value = row[index_value]
            temp_object[gsheet_array[index_keys][index_value]] = gsheet_array[row_values][index_value]
        }

        // append the current temporary object to the final array of objects
        final_object.push(temp_object)
    }

    // return the final array of json
    return final_object
}

// export the function
export default converter