import { useState , useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
	const [isPending, setIspending] = useState(true);
    useEffect(() => {
		setTimeout(() => {
			fetch(url).then(res => {
				if(!res.ok){
					throw Error("Could not Fetch data from server")
				}
				return res.json();
			}).then(data => {
				setData(data);
				setIspending(false);
			}).catch(err => {
				console.log(err.message);
			})
		}, 1000)
	}, [url]);

    return { data , isPending}
}

export default useFetch;