const data = [
    {
        title: "hjfdsgfguihlg;hs",
        date: "90-90-90",
        desc: "yufguguyuuyguyfuyfuyfufutfuyfuyfuyfyufy",
    },
    {
        title: "hjfdsgfguihlg;hs",
        date: "90-90-90",
        desc: "yufguguyuuyguyfuyfuyfufutfuyfuyfuyfyufy",
    },
    {
        title: "hjfdsgfguihlg;hs",
        date: "90-90-90",
        desc: "yufguguyuuyguyfuyfuyfufutfuyfuyfuyfyufy",
    },
    {
        title: "hjfdsgfguihlg;hs",
        date: "90-90-90",
        desc: "yufguguyuuyguyfuyfuyfufutfuyfuyfuyfyufy",
    },
]
const timelinecontainer = document.getElementsById('timelinecontainer');
const timelines = data.map((timeline, i) => 
{
    return `
 <div class="row content mt-5" key='${i}'>
  <div class="col-lg-1">
    <div class="verticalLine"></div>
    <div class="badgeEle mt-2 mb-2"></div>
    <div class="verticalLine"></div>
  </div>
  <div class="col-lg-11">
    <div class="card shadow">
        <div class="card-body">
            <div class="d-flex justify-content-between">
                <h5>${timeline.title}</h5>
                <h4>${timeline.date}</h4>
            </div>
            <p class="mt-3">${timeline.desc}</p>
        </div>
    </div>
  </div>
 </div>
 `;
}).join('');

timelinecontainer.innerHTML = timelines;
