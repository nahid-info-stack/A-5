console.log('homes here');

const issueLoding = () => {
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
.then(res => res.json())
.then(json => displayIssues(json.data))

}
const displayIssues = (issues) =>{
    console.log(issues);
    // 1. get the container 
    const issuescontainer=document.getElementById('issue-container');
    //issuescontainer.innerHTML="";
    // 2. show every single element
    issues.forEach(issue => {
        console.log(issue);

        // 3. create a chiled
    const createCard = document.createElement('div');
    createCard.className = `issue-card ${issue.status === 'open' ? 'border-t-4 border-green-500' : 'border-t-4 border-purple-500'}`;
    createCard.innerHTML=`
    <div class="card bg-base-100 rounded-lg p-4 shadow-md space-y-3 w-full">
                <div class="flex justify-between">
                    <div >
                    <img src="./assets/${issue.status == "open" ? "Open-Status.png" : "Closed- Status .png"}" alt="">
                     
                </div>
                <div>
                    <button class="btn bg-red-300">${issue.priority }</button>
                </div>

                </div>
                <div>
                    <h2 class="font-semibold">${issue.title}</h2>
                    <p class="text-[#64748B]">${issue.description}</p>
                </div>
                <div>
                    <button class="btn btn-outline btn-error rounded-full">BUG</button>
                    <button class="btn btn-outline btn-warning rounded-full">HELP WANTED</button>
                </div>
                <div>
                    <p class="text-[#64748B]">${issue.author}</p>
                    <p class="text-[#64748B]">${issue.updatedAt}</p>
                </div>
            </div>
    
    `;
    // 4. append the chiled into the container
    issuescontainer.appendChild(createCard);
        
    });
    

}
issueLoding();