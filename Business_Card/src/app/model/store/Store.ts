import { create } from 'mobx-persist';
import localForage from 'localforage';

const hydrate = create({ storage: localForage });

export const stores = {

};

// Подключаем персистентность к нужным сторам
//hydrate('storeName', storeName);