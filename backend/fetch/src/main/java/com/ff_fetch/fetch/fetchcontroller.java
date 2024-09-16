package com.ff_fetch.fetch;

import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;


@RestController
@RequestMapping("/api")
public class fetchcontroller {

    private fetch fetchService;

    @Autowired
    public  fetchcontroller(fetch fetchService){
        this.fetchService = fetchService;
    }

    @GetMapping("/test")
    public JsonNode getExample(){
        String apiUrl = "https://na.lodestonenews.com/news/all";

        try{
             return fetchService.makeGetRequest(apiUrl);
        }catch (IOException e){
            e.printStackTrace();
            return null;
        }
    }
}
