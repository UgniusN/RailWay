package lt.codeacademy.rest.controller;

import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import java.math.BigDecimal;

import lt.codeacademy.rest.entities.Travel;
import lt.codeacademy.rest.services.TravelService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class TravelsController {

    private final TravelService travelService;

    public TravelsController(TravelService travelService) {
        this.travelService = travelService;
    }

    @ApiResponses({
            @ApiResponse(code = 500, message = "Somethings wrong")
    })
    @GetMapping("/getall")
    public List<Travel> getTravels() {
        return travelService.getAllTravels();
    }

    @GetMapping("{id}")
    public Travel getProductById(@PathVariable Long id) {
        return travelService.getArticleById(id);
    }

    @PostMapping("/createtravel")
    public Travel buildTraver(@RequestParam(name = "startdestination") String start,
                              @RequestParam(name = "enddestination") String end,
                              @RequestParam(name = "price") BigDecimal price) {

        Travel travel = new Travel();
        travel.setStart_destination(start);
        travel.setEnd_destination(end);
        travel.setPrice(price);
        return travelService.buildTraver(travel);
    }
}