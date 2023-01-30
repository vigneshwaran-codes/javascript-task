//Problem5:  Check the valid ip address

const arr = ['102.32.245.54', '12.3002.20.55', '2.100.30.56', '256.02.45.78']

function ipAdd (arr) {
    for (i = 0; i < arr.length; i++) {
      const res = arr[i].split('.')
        for (j = 0; j < res.length; j++) {
          if (+res[j] > 255 && +res[j] >= 0 || +res[j] < 0 && +res[j] <= 255) {
            console.log(`Not Valid ip address : ${arr[i]}`)
        }
    }
  }
}
ipAdd(arr)
