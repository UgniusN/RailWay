package lt.codeacademy.rest.services;

import lt.codeacademy.rest.entities.Travel;
import lt.codeacademy.rest.repositories.TravelRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TravelService {

    private TravelRepository travelRepository;

    public TravelService(TravelRepository travelRepository) {
        this.travelRepository = travelRepository;
    }

    public List<Travel> getAllTravels() {
        return travelRepository.findAll();
    }

    public Travel createTravel(Travel product) {
        return travelRepository.save(product);
    }

    public Travel getArticleById(Long id) {
        return travelRepository.findById(id).orElseThrow(null);
    }

    public Travel buildTraver(Travel travel) {
        return travelRepository.save(travel);
    }
}
