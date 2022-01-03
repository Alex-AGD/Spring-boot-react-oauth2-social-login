package com.example.springsocial.controller;

import com.kwabenaberko.newsapilib.NewsApiClient;
import com.kwabenaberko.newsapilib.models.Source;
import com.kwabenaberko.newsapilib.models.request.SourcesRequest;
import com.kwabenaberko.newsapilib.models.response.SourcesResponse;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequestMapping(value = "/news")
@CrossOrigin(origins = "http://localhost:8081")
public class NewsController {
    @Value("${news-key}")
    private String key;
    private static final Logger logger = LoggerFactory.getLogger(NewsController.class);
    List<Source> news = new ArrayList<>();


    @GetMapping
    public ResponseEntity<List<Source>> getNews(@RequestParam(required = false) String title) {
            newsFetching();
        return new ResponseEntity<>(news, HttpStatus.OK);
    }

    @Bean
    private void newsFetching() {
        NewsApiClient newsApiClient = new NewsApiClient(key);
        newsApiClient.getSources(
                new SourcesRequest.Builder()
                        .language("ru")
                        .build(),
                new NewsApiClient.SourcesCallback() {
                    @Override
                    public void onSuccess(SourcesResponse response) {
                        List<Source> sources = response.getSources();
                        news.addAll(sources);
                    }

                    @Override
                    public void onFailure(Throwable throwable) {
                        logger.error(throwable.getMessage());
                    }
                }
        );
    }
}

