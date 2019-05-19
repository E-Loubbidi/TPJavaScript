function createRow(input)
{
    //input : {ref, prix, qte}
    const tr=document.createElement('tr');

    const tdRef=document.createElement('td');
    tdRef.classList.add('ref');
    tdRef.innerText=input.ref;
    tr.appendChild(tdRef);

    const tdPrix=document.createElement('td');
    tdPrix.classList.add('prix');
    tdPrix.innerText=input.prix.toFixed(2);
    tr.appendChild(tdPrix);

    const tdQte=document.createElement('td');
    tdQte.classList.add('qte');
    tdQte.innerText=input.qte;
    tr.appendChild(tdQte);

    const tdSt=document.createElement('td');
    tdSt.classList.add('st');
    tdSt.innerText=input.st.toFixed(2);
    tr.appendChild(tdSt);

    return tr;

}

function createTable(inputs)
{
    const tbody=document.querySelector('.facture tbody');
    const totalCell=document.querySelector('.facture .total');

    const rows=inputs.map(i => ({...i, st: i.prix * i.qte}));

    rows.forEach(input => tbody.appendChild(createRow(input)));

    const total=rows.reduce((acc, input)=>acc+input.st, 0);

    totalCell.innerText=total.toFixed(2);
   
}

createTable(facture);