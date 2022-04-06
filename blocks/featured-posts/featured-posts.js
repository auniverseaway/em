export default async function init(el) {
    const resp = await fetch('/query-index.json');
    console.log(resp.status);
    if (resp.ok) {
        const json = await resp.json();
        const list = document.createElement('ul');
        json.data.forEach(item => {
            const post = document.createElement('li');
            post.className = 'post';
            const link = document.createElement('a');
            link.href = item.path;
            link.textContent = item.title;


            post.append(link);
            list.append(post);
        });


        el.append(list);
    }
}