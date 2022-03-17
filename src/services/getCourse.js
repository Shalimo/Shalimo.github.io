export default class getCourse {
    getResourse = async () => {
        const result = await fetch("https://www.nbrb.by/api/exrates/rates/28")

        return await result.json();
    }

    
}