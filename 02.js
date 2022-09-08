const head1 = document.querySelector('.headings1');
console.log(head1);
head1.style.color = "green"
const head2 = document.querySelector('.headings2');
const head3 = document.querySelector('.headings3');
const head4 = document.querySelector('.headings4');
const head5 = document.querySelector('.headings5');
const head6 = document.querySelector('.headings6');
const head7 = document.querySelector('.headings7');
const head8 = document.querySelector('.headings8');
const head9 = document.querySelector('.headings9');
const head10 = document.querySelector('.headings10');
const result = document.querySelector(".results")
let times = 10;
setTimeout(() => {
    head1.innerHTML = times--;
    setTimeout(() => {
        head2.innerHTML = times--;
        setTimeout(() => {
            head3.innerHTML = times--;
            setTimeout(() => {
                head4.innerHTML = times--;
                setTimeout(() => {
                    head5.innerHTML = times--;

                    setTimeout(() => {
                        head6.innerHTML = times--;

                        setTimeout(() => {
                            head7.innerHTML = times--;

                            setTimeout(() => {
                                head8.innerHTML = times--;

                                setTimeout(() => {
                                    head9.innerHTML = times--;

                                    setTimeout(() => {
                                        head10.innerHTML = times--;

                                        setTimeout(() => {
                                            result.innerHTML = "<b>Happy Independence Day</b>"
                                            result.style.fontSize = "50px";
                                            result.style.color = "red";
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);

}, 1000)