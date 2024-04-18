class Accordeon {
    constructor(accItems) {
        this.accItems = document.querySelectorAll(accItems);
    }

    init() {
        this.accItems.forEach(item => {
            item.addEventListener('click', () => {

                const isActive = item.classList.contains('directions__item_active');

                this.accItems.forEach(item => {
                    item.classList.remove('directions__item_active');
                });

                if (!isActive) {
                    item.classList.add('directions__item_active');
                }
            });
        });

    }

}

export default Accordeon