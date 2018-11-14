export const updateObject = (oldObj, newObj) => {
	return {
		...oldObj,
		...newObj
	}
}

export const updateItemArray = (array, itemId, cb) => {
	const updatedItems = array.map(item => {
		if(item.id !== itemId){
			return item
		}

		const updatedItem = cb(item)
		return updatedItem
	})

	return updatedItems
}