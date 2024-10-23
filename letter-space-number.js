function   letterSpaceNumber(str) {
    const regex = /[a-zA-Z] \d(?!\d|[a-zA-Z])/g
    return str.match(regex) || []
}
