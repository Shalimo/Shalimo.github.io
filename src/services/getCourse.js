export default class GetCourse {
    getCourse = async (url) => {
        const res = await fetch(url);

        return await res.json();
    }   
}