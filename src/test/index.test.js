describe('LinkedList HomeWork', () => {
    describe('LinkedList',() => {
        const lList = new LinkedList();

        it('should be defined', () => {
            assert.isDefined(lList, 'function has been defined')
        });
    });
    describe('LinkedList.init', () => {

        it('LinkedList init should be defined', () => {
            const lList = new LinkedList();
            assert.isDefined(lList.init, 'function has been defined')
        });

        it('init array - [1, 2, 3]', () => {
            const lList = new LinkedList();
            const array = [1, 2, 3];
            const arrayLength = 3;
            lList.init(array);

            assert.deepEqual(lList.getSizeOfList(), arrayLength);
        });

        it('init array - [1, 2]', () => {
            const lList = new LinkedList();
            const array = [1, 2];
            const arrayLength = 2;
            lList.init(array);

            assert.deepEqual(lList.getSizeOfList(), arrayLength);
        });

        it('init array - [1]', () => {
            const lList = new LinkedList();
            const array = [1];
            const arrayLength = 1;
            lList.init(array);

            assert.deepEqual(lList.getSizeOfList(), arrayLength);
        });

        it('init array - []', () => {
            const lList = new LinkedList();
            const array = [];
            const arrayLength = 0;
            lList.init(array);

            assert.deepEqual(lList.getSizeOfList(), arrayLength);
        });

        it('init array - [\'javascript\']', () => {
            const lList = new LinkedList();
            const array = ['javascript'];
            const arrayLength = 1;
            lList.init(array);

            assert.deepEqual(lList.getSizeOfList(), arrayLength);
        });

        it('init array - [undefined]', () => {
            const lList = new LinkedList();
            const array = [undefined];
            const arrayLength = 1;
            lList.init(array);

            assert.deepEqual(lList.getSizeOfList(), arrayLength);
        });

        it('init array - [null]', () => {
            const lList = new LinkedList();
            const array = [null];
            const arrayLength = 1;
            lList.init(array);

            assert.deepEqual(lList.getSizeOfList(), arrayLength);
        });

        it('init array - undefined', () => {
            const lList = new LinkedList();
            const array = undefined;
            const arrayLength = 0;
            lList.init(array);

            assert.deepEqual(lList.getSizeOfList(), arrayLength);
        });

        it('init array - null', () => {
            const lList = new LinkedList();
            const array = null;
            const arrayLength = 0;
            lList.init(array);

            assert.deepEqual(lList.getSizeOfList(), arrayLength);
        });
    });
    describe('LinkedList.addElmAtStart', () => {

        it('should be defined', () => {
            const lList = new LinkedList();
            assert.isDefined(lList.addElmAtStart, 'function has been defined')
        });

        it('should add an element at start - [5, 2, 3, 4] ', () => {
            const lList = new LinkedList();
            const array = [2, 3, 4];
            const element = 5;
            const expArray = [5, 2, 3, 4];
            const expArrayLength = 4;
            lList.init(array);
            
            const actual = lList.addElmAtStart(element);
            
            assert.deepEqual(actual, expArrayLength);
            assert.deepEqual(lList.toArray(), expArray);
        });

        it('should add an element at start - [5, 2, 3]', () => {
            const lList = new LinkedList();
            const array = [2, 3];
            const element = 5;
            const expArray = [5, 2, 3];
            const expArrayLength = 3;
            lList.init(array);
            
            const actual = lList.addElmAtStart(element);
            
            assert.deepEqual(actual, expArrayLength);
            assert.deepEqual(lList.toArray(), expArray);
        });

        it('should add an element at start - [5, 2]', () => {
            const lList = new LinkedList();
            const array = [2];
            const element = 5;
            const expArray = [5, 2];
            const expArrayLength = 2;
            lList.init(array);
            
            const actual = lList.addElmAtStart(element);
            
            assert.deepEqual(actual, expArrayLength);
            assert.deepEqual(lList.toArray(), expArray);
        });

        it('should add an element at start - [5]', () => {
            const lList = new LinkedList();
            const array = [];
            const element = 5;
            const expArray = [5];
            const expArrayLength = 1;
            lList.init(array);
            
            const actual = lList.addElmAtStart(element);
            
            assert.deepEqual(actual, expArrayLength);
            assert.deepEqual(lList.toArray(), expArray);
        });
    });
    describe('LinkedList.deleteFirst', () => {
        const lList = new LinkedList();

        it('should be defined', () => {
            assert.isDefined(lList.deleteFirst, 'function has been defined')
        });

        it('should delete first element - [3, 4, 5, 6]', () => {
            const lList = new LinkedList();
            const array = [2, 3, 4, 5, 6];
            const expArray = [3, 4, 5, 6];
            const expElm = 2;
            const expArrayLength = 4;
            lList.init(array);
            
            const actual = lList.deleteFirst();
            
            assert.deepEqual(actual, expElm);
            assert.deepEqual(lList.toArray(), expArray);
            assert.deepEqual(lList.getSizeOfList(), expArrayLength);
        });

        it('should delete first element - [3, 4]', () => {
            const lList = new LinkedList();
            const array = [2, 3, 4];
            const expArray = [3, 4];
            const expElm = 2;
            const expArrayLength = 2;
            lList.init(array);
            
            const actual = lList.deleteFirst();
            
            assert.deepEqual(actual, expElm);
            assert.deepEqual(lList.toArray(), expArray);
            assert.deepEqual(lList.getSizeOfList(), expArrayLength);
        });

        it('should delete first element - [3]', () => {
            const lList = new LinkedList();
            const array = [9, 3];
            const expArray = [3];
            const expElm = 9;
            const expArrayLength = 1;
            lList.init(array);
            
            const actual = lList.deleteFirst();
            
            assert.deepEqual(actual, expElm);
            assert.deepEqual(lList.toArray(), expArray);
            assert.deepEqual(lList.getSizeOfList(), expArrayLength);
        });
    });
    describe('LinkedList.addToEnd', () => {
        const lList = new LinkedList();

        it('should be defined', () => {
            assert.isDefined(lList.addToEnd, 'function has been defined')
        });

        it('should add element at the end - 5', () => {
            const lList = new LinkedList();
            const array = [3, 4, 5, 6];
            const element = 5;
            const expArrayLength = 5;
            lList.init(array);
            
            const actual = lList.addToEnd(element);
            
            assert.deepEqual(actual, expArrayLength);
        });

        it('should add element at the end - 3', () => {
            const lList = new LinkedList();
            const array = [2, 3];
            const element = 5;
            const expArrayLength = 3;
            lList.init(array);
            
            const actual = lList.addToEnd(element);
            
            assert.deepEqual(actual, expArrayLength);
        });

        it('should add element at the end - 3', () => {
            const lList = new LinkedList();
            const array = [2, 3];
            const element = 'fifty';
            const expArrayLength = 3;
            lList.init(array);
            
            const actual = lList.addToEnd(element);
            
            assert.deepEqual(actual, expArrayLength);
        });
    });
    describe('LinkedList.deleteLast', () => {
        const lList = new LinkedList();

        it('should be defined', () => {
            assert.isDefined(lList.deleteLast, 'function has been defined')
        });

        it('should delete last element - 6', () => {
            const lList = new LinkedList();
            const array = [2, 3, 4, 5, 6];
            const expArray = [2, 3, 4, 5];
            const expElm = 6;
            const expArrayLength = 4;
            lList.init(array);
            
            const actual = lList.deleteLast();
            
            assert.deepEqual(actual, expElm);
            assert.deepEqual(lList.toArray(), expArray);
            assert.deepEqual(lList.getSizeOfList(), expArrayLength);
        });

        it('should delete last element - 5', () => {
            const lList = new LinkedList();
            const array = [2, 3, 4, 5];
            const expArray = [2, 3, 4];
            const expElm = 5;
            const expArrayLength = 3;
            lList.init(array);
            
            const actual = lList.deleteLast();
            
            assert.deepEqual(actual, expElm);
            assert.deepEqual(lList.toArray(), expArray);
            assert.deepEqual(lList.getSizeOfList(), expArrayLength);
        });

        it('should delete last element - 4', () => {
            const lList = new LinkedList();
            const array = [2, 3, 4];
            const expArray = [2, 3];
            const expElm = 4;
            const expArrayLength = 2;
            lList.init(array);
            
            const actual = lList.deleteLast();
            
            assert.deepEqual(actual, expElm);
            assert.deepEqual(lList.toArray(), expArray);
            assert.deepEqual(lList.getSizeOfList(), expArrayLength);
        });

        it('should delete last element - 3', () => {
            const lList = new LinkedList();
            const array = [2, 3];
            const expArray = [2];
            const expElm = 3;
            const expArrayLength = 1;
            lList.init(array);
            
            const actual = lList.deleteLast();
            
            assert.deepEqual(actual, expElm);
            assert.deepEqual(lList.toArray(), expArray);
            assert.deepEqual(lList.getSizeOfList(), expArrayLength);
        });

        it('should delete last element - \'five\'', () => {
            const lList = new LinkedList();
            const array = [2, 3, 'ten', 4, 5, 6, 'five'];
            const expArray = [2, 3, 'ten', 4, 5, 6];
            const expElm = 'five';
            const expArrayLength = 6;
            lList.init(array);
            
            const actual = lList.deleteLast();
            
            assert.deepEqual(actual, expElm);
            assert.deepEqual(lList.toArray(), expArray);
            assert.deepEqual(lList.getSizeOfList(), expArrayLength);
        });

        it('should delete last element - undefined', () => {
            const lList = new LinkedList();
            const array = [2, 3, 'ten', 4, 5, 'five', undefined];
            const expArray = [2, 3, 'ten', 4, 5, 'five'];
            const expElm = undefined;
            const expArrayLength = 6;
            lList.init(array);
            
            const actual = lList.deleteLast();
            
            assert.deepEqual(actual, expElm);
            assert.deepEqual(lList.toArray(), expArray);
            assert.deepEqual(lList.getSizeOfList(), expArrayLength);
        });

        it('should delete last element - null', () => {
            const lList = new LinkedList();
            const array = [2, 3, 'ten', 'five', undefined, null];
            const expArray = [2, 3, 'ten', 'five', undefined];
            const expElm = null;
            const expArrayLength = 5;
            lList.init(array);
            
            const actual = lList.deleteLast();
            
            assert.deepEqual(actual, expElm);
            assert.deepEqual(lList.toArray(), expArray);
            assert.deepEqual(lList.getSizeOfList(), expArrayLength);
        });
    });
    describe('LinkedList.clearList', () => {
        const lList = new LinkedList();

        it('should be defined', () => {
            assert.isDefined(lList.clearList, 'function has been defined')
        });
    });
    describe('LinkedList.toArray', () => {
        const lList = new LinkedList();

        it('should be defined', () => {
            assert.isDefined(lList.toArray, 'function has been defined')
        });
    });
    describe('LinkedList.toString', () => {
        const lList = new LinkedList();

        it('should be defined', () => {
            assert.isDefined(lList.toString, 'function has been defined')
        });
    });
    describe('LinkedList.getSizeOfList', () => {
        const lList = new LinkedList();

        it('should be defined', () => {
            assert.isDefined(lList.getSizeOfList, 'function has been defined')
        });

        it('should show the size of the list - 4', () => {
            const lList = new LinkedList();
            const array = [3, 4, 5, 6];
            const expArray = [3, 4, 5, 6];
            const expArrayLength = 4;
            lList.init(array);
            
            const actual = lList.getSizeOfList();
            
            assert.deepEqual(actual, expArrayLength);
            assert.deepEqual(lList.toArray(), expArray);
        });

        it('should show the size of the list - 3', () => {
            const lList = new LinkedList();
            const array = [3, 4, 5];
            const expArray = [3, 4, 5];
            const expArrayLength = 3;
            lList.init(array);
            
            const actual = lList.getSizeOfList();
            
            assert.deepEqual(actual, expArrayLength);
            assert.deepEqual(lList.toArray(), expArray);
        });

        it('should show the size of the list - 2', () => {
            const lList = new LinkedList();
            const array = [3, 4];
            const expArray = [3, 4];
            const expArrayLength = 2;
            lList.init(array);
            
            const actual = lList.getSizeOfList();
            
            assert.deepEqual(actual, expArrayLength);
            assert.deepEqual(lList.toArray(), expArray);
        });

        it('should show the size of the list - 1', () => {
            const lList = new LinkedList();
            const array = [3];
            const expArray = [3];
            const expArrayLength = 1;
            lList.init(array);
            
            const actual = lList.getSizeOfList();
            
            assert.deepEqual(actual, expArrayLength);
            assert.deepEqual(lList.toArray(), expArray);
        });

        it('should show the size of the list - 0', () => {
            const lList = new LinkedList();
            const array = [];
            const expArray = [];
            const expArrayLength = 0;
            lList.init(array);
            
            const actual = lList.getSizeOfList();
            
            assert.deepEqual(actual, expArrayLength);
            assert.deepEqual(lList.toArray(), expArray);
        });
    });
});