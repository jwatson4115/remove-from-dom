function deleteDomElement(element : string, amount : number) {
    chrome.tabs.executeScript(null, {
        code: "var elementToRemove = '"+element+"'; var deleteAmount = "+amount+";"
    }, function() {
        chrome.tabs.executeScript(null, { file: "remove-from-dom.js" });
    });
}

window.onload = () => {

    const btnDelete = document.getElementById("delete-button");

    btnDelete.addEventListener("click", () => {
        const deleteIdentifer = document.getElementById("delete-textbox") as HTMLInputElement;
        const txtDeleteAmount = document.getElementById("delete-amount") as HTMLInputElement;

        let deleteAmount = Number(txtDeleteAmount.value);
        deleteAmount = isNaN(deleteAmount) || deleteAmount < 1 ? 0 : deleteAmount;

        deleteDomElement(deleteIdentifer.value, deleteAmount);

    }, false);

};
