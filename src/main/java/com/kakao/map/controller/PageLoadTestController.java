package com.kakao.map.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller // 항상 해야하는 것, 메소드 호출을 받을 수 있다. 이것이 있어야 호출을 받을 수 있다.
public class PageLoadTestController {

    @RequestMapping(value = "/t1", method = RequestMethod.GET)// 이 주소로 GET 요청을 해야하지만 응답한다.
    public String test1(){ // String이 있으면 return이 있다.
        System.out.println("t1요청 들어옴?");
        return "test1"; // 응답, return은 서버의 파일명
    }
    @RequestMapping(value = "/t2", method = RequestMethod.GET)
    public String test2(){
        System.out.println("t2요청 들어옴?");
        return "test1";
    }
    @RequestMapping(value = "/test/page", method = RequestMethod.GET)
    public String test3(){
        return "test/test2";
    }

    @RequestMapping(value = "/map", method = RequestMethod.GET)
    public String kakaoMap(){
        return "map";

    }


}
