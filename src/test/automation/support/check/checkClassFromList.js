/**
 * Check if the given element has the given class
 * @param  {String}   index             Element index
 * @param  {String}   elem              Element selector
 * @param  {String}   falseCase         Whether to check for the class to exist
 *                                      or not ('has', 'does not have')
 * @param  {String}   expectedClassName The class name to check
 */
module.exports = (index, elem, falseCase, expectedClassName) => {
    /**
     * List of all the classes of the element
     * @type {Array}
     */
    const elems = browser.elements(elem);
    const classesList = elems.value[index].getAttribute('class').split(' ');

    if (falseCase === 'does not have') {
        expect(classesList).to.not
            .include(
                expectedClassName,
                `Element ${elem} at index ${index} should not have the class ${expectedClassName}`
            );
    } else {
        expect(classesList).to
            .include(
                expectedClassName,
                `Element ${elem} at index ${index} should have the class ${expectedClassName}`
            );
    }
};
