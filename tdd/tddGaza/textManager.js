// value 값을 class로 전역에서 class 안으로 가둠
// 객체지향 언어를 사용하여
class TextManager {
    constructor() {
        this.value = { data: 'Hello Lions!' };
    }

    getValue() {
        return this.value.data;
    }

    setValue(newValue) {
        this.value = newValue;
    }
}