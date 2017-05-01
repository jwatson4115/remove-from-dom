class RemoveFromDom {

    delete(deleteIdentifier: string, amount: number) {
        const firstCharacter = deleteIdentifier.substr(0, 1);

        if (firstCharacter === "#") {
            this.deleteById(deleteIdentifier);
        }
        else if (firstCharacter === ".") {
            this.deleteByClass(deleteIdentifier, amount);
        }
        else {
            this.deleteByTag(deleteIdentifier, amount);
        }
    }

    private deleteById(idString: string) {
        idString = this.deleteFirstCharacter(idString);
        const element = document.getElementById(idString);

        element.parentNode.removeChild(element);
    }

    private deleteByClass(classString: string, amount: number) {
        classString = this.deleteFirstCharacter(classString);
        const elements = document.getElementsByClassName(classString);

        amount = this.getDeleteAmount(amount, elements.length);

        for (let i = 0; i < amount; i++) {
            elements[0].parentNode.removeChild(elements[0]);
        }
    }

    private deleteByTag(tagString: string, amount: number) {
        const tags = document.getElementsByTagName(tagString);
        amount = this.getDeleteAmount(amount, tags.length);

        for (let i = 0; i < amount; i++) {
            tags[0].parentNode.removeChild(tags[0]);
        }
    }

    private deleteFirstCharacter(text: string): string {
        return text.substr(1);
    }

    private getDeleteAmount(amount: number, elementLength: number): number {
        if (amount <= 0) {
            return elementLength;
        }
        else {
            return Math.min(amount, elementLength);
        }
    }
}

const removeFromDom = new RemoveFromDom();
removeFromDom.delete(elementToRemove, deleteAmount);
