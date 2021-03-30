
let tags = document.querySelectorAll('div');

for (tag of tags) {
    tag.addEventListener('click',function(e){
        console.log('Click',this.id,'Target', e.target.id);
    });
}