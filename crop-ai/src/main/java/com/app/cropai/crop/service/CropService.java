package com.app.cropai.crop.service;


import com.app.cropai.crop.dto.TestResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;



@Service
@RequiredArgsConstructor
@Slf4j
public class CropService {



//    public Mono<TestResponse> test() {
//        Mono<TestResponse> test = webClient.get()
//            .uri("/")
//            .retrieve()
//            .bodyToMono(TestResponse.class);
//
//        log.info("crop service test : {}", test);
//        return test;
//    }
}
