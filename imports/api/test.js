import { PublicationCollector } from 'meteor/johanbrook:publication-collector';

export const collect = (publication, collection) =>
	new Promise((resolve) => {
	new PublicationCollector().collect(publication, (collections) => {
		const collectionValues = collections[collection._name];
		resolve(collectionValues);
	});
});