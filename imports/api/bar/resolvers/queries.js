
import { Bar, BarCache } from '/imports/api/bar/collection.js';

export const Query = {
    bar(obj, args) {
        const name = Bar.getTableName();
        const cacheKey = `${name}:id:${args.id}`;

        return BarCache.findOneCached(cacheKey, {where: {id: args.id}}).then(function([data]){
            if(data && data.dataValues){
                return data.dataValues;
            }
            return null;
        });
		
    }
};