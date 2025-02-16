function replace(s) {
    // 1. Create a regex variable to test against string
    const regex = /[aeiou]/gi
    // 2. Return new string using replaceAll method to replace all occurrances of matched regex pattern to an '!'
    return s.replaceAll(regex, '!')
}

console.log(replace('Hi!'))
