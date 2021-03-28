input = 'hello world'

var balanceCheck = (test) => {
    let emptyArr = [];
    for (var i = 0; i < test.length; i++) {
        emptyArr.push(test[i])
    }


    console.log(`empty arr ${emptyArr}`)

    for (var i = 0; i < emptyArr.length; i++) {
        if (emptyArr[i] == '}') {
            for (var j = i - 1; j >= 0; j--) {
                if (emptyArr[j] == '{') {
                    emptyArr[i] = 'x'
                    emptyArr[j] = 'x'
                    break

                }
            }
        }
    }

    console.log(`ending arr ${emptyArr}`)

    var answer
    for (var k = 0; k < emptyArr.length; k++) {
        if (emptyArr[k] == '{') {
            answer = k
            break
        } else if (emptyArr[k] == '}') {
            answer = k
            break
        } else if (!emptyArr.includes('{') && !emptyArr.includes('}')) {
            answer = -1
            break
        }
    }

    console.log(`answer is ${answer}`)
    return answer

}

balanceCheck(input);