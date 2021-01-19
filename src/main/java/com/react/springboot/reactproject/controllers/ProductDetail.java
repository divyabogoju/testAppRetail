package com.react.springboot.reactproject.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.io.InputStream;

@RestController
public class ProductDetail {

    @Value("${item.data.path}")
    String itemDataPath;

    /**
     * stub.item.1.path=static/json/stubs/item-data-1.json
     * stub.item.2.path=static/json/stubs/item-data-2.json
     * stub.item.3.path=static/json/stubs/item-data-3.json
     **/

    @Value("${stub.item.1.path}")
    String stubItem1;

    @Value("${stub.item.2.path}")
    String stubItem2;

    @Value("${stub.item.3.path}")
    String stubItem3;

    @GetMapping(value = "/productDetail", produces = "application/json; charset=UTF-8")
    public ResponseEntity<InputStream> getProductDetail(Model model) throws IOException {
        InputStream itemStream = new ClassPathResource(itemDataPath).getInputStream();
        InputStreamResource inputStreamResource = new InputStreamResource(itemStream);
        return new ResponseEntity(inputStreamResource, HttpStatus.OK);
    }

    @GetMapping(value = "/stub/productDetail/{id}", produces = "application/json; charset=UTF-8")
    public ResponseEntity<InputStream> getProductDetailStub(@PathVariable(name = "id") int id) throws IOException {
        String stubPath;

        switch (id) {
            case 1:
                stubPath = stubItem1;
                break;
            case 2:
                stubPath = stubItem2;
                break;
            case 3:
                stubPath = stubItem3;
                break;
            default:
                stubPath = stubItem1;
                break;
        }
        InputStream itemStream = new ClassPathResource(stubPath).getInputStream();
        InputStreamResource inputStreamResource = new InputStreamResource(itemStream);
        return new ResponseEntity(inputStreamResource, HttpStatus.OK);
    }
}
