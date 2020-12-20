import {handleSubmit} from './js/updateUI';
import {today} from './js/countDown';
import {countDown} from './js/countDown';
import {getCred} from './js/getCred';
import {makeNewCard} from './js/previousEntries';
import {hideNewCards} from './js/previousEntries';
import {getNasa} from './js/getNasa';

import './styles/mobile.scss';
import './styles/style.scss';

document.getElementById('generate').addEventListener('click', handleSubmit);
document.getElementById('previous-entries').addEventListener('click', makeNewCard);
document.getElementById('hide-entries').addEventListener('click', hideNewCards);

export {
    handleSubmit,
    countDown,
    today,
    getCred,
    makeNewCard,
    hideNewCards,
    getNasa
}
