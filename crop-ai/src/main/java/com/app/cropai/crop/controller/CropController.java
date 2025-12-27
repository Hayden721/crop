package com.app.cropai.crop.controller;

import com.app.cropai.crop.dto.TestResponse;
import com.app.cropai.crop.service.CropService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;


@RestController
@RequiredArgsConstructor
@RequestMapping("/crop")
@Slf4j

public class CropController {
    private final CropService cropService;

    @Value("${react.url}")
    private String reactUrl;

    @GetMapping("/test")
    public String test(){
        log.info("test : {}", reactUrl);

        return "test";

    }

//    @GetMapping("/test/fastapi")
//    public Mono<TestResponse> testFastApi(){
//        return cropService.test();
//    }
}
