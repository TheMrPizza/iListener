import app from './../firebase';

const addToPendingUsers = (user, successCallback, failCallback) => {
    let collectionName = '';
    if (user.isAdvisor) {
        collectionName = 'pendingAdvisors';
    }
    else{
        collectionName = 'pendingUsers';
    }

    const db = app.firestore();
    db.collection(collectionName).doc(user.firebaseUser.uid).set({
            name: user.firebaseUser.displayName
        })
    .then(successCallback)
    .catch(failCallback);
};

const removeFromPending = () => {

};

const searchChats = () => {

};