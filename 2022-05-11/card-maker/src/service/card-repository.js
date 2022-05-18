import firebaseApp from "./firebase";
import {getDatabase, ref, set, remove} from "firebase/database";

class CardRepository {
    saveCard(userId, card) {
        const db = getDatabase();
        set(ref(db, `${userId}/cards/${card.id}`), card);
    }

    removeCard(userId, card) {
        const db = getDatabase();
        const cardRef = ref(db, `${userId}/cards/${card.id}`);
        remove(cardRef);
    }
}

export default CardRepository;