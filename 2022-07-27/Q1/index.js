import "style.css";
import renderList from "./listRenderer";
import {debounce} from './util';

const app = document.querySelector("#app");
const fetchMoreTrigger = document.querySelector("#fetchMore");
let page = 0;

const fetchMore = async () => {
    const target = page ? fetchMoreTrigger : app;
    target.classList.add("loading");
    await renderList(page++);
    target.classList.remove("loading");
};

const onScroll = e => {
    // console.dir(e.target.scrollingElement);
    const {
        scrollHeight,
        scrollTop,
        clientHeight,
    } = e.target.scrollingElement;
    console.log(scrollTop);  // 성능 저하의 요인
    if (scrollTop + clientHeight === scrollHeight) {
        fetchMore();
    }
};

document.addEventListener("scroll", debounce(onScroll, 300));
fetchMore();


/**
 * scroll 이벤트는 매우 많이 발생하므로 성능 저하가 우려된다. ‘fetchMore’ 동작은 스크롤의 최하단에서만 발생하므로 스크롤 이벤트 중 마지막 값에 대해서만 반응하는 것으로 충분하다.
 * 이를 위한 기법 throttle / debounce
 *
 * throttle : 일정 시간 간격으로 한번씩만 실행
 * debounce : 연속으로 발생하는 이벤트에 대해 마지막 한 번만 실행
 */