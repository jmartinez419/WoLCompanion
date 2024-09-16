package com.ff_fetch.fetch;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import okhttp3.OkHttp;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class fetch {

    private final OkHttpClient client = new OkHttpClient();
    private final ObjectMapper objectMapper = new ObjectMapper();

    public JsonNode makeGetRequest(String apiUrl) throws IOException {
        Request request = new Request.Builder().url(apiUrl).build();

        try ( Response response = client.newCall(request).execute()){
            if(response.isSuccessful()){
                return mapObject(response.body().string());
            }else{
                throw new IOException("Unexpected response:" + response.code());
            }
        }
    }

    public JsonNode mapObject(String string){
        if(!string.isEmpty()){
            try{
                return objectMapper.readTree(string);
            }catch (IOException e){
                throw new RuntimeException("Unable to parse object");
            }
        }return null;

    }
}
