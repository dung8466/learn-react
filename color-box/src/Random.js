
function Random(arr){
        let temp = Math.floor(Math.random() * arr.length);
        return arr[temp];
}

export default Random;