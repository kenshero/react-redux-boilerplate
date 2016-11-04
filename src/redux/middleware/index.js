export const crashReporter = (store) => (next) => (action) => {
    try{
        next(action);
    }catch(err){
        console.group('crashReporter');
        console.error("Error Report : ", err);
        console.groupEnd('crashReporter');
    }
}