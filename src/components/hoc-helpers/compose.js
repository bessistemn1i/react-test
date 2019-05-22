const compose = (...arrOfFuncs) => (component) => {
    return arrOfFuncs.reduceRight((prevVal, func) => func(prevVal), component);
}

export default compose;