package lt.codeacademy.rest.controller;

import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import java.math.BigDecimal;

import lt.codeacademy.rest.authorisation.AuthenticationRequest;
import lt.codeacademy.rest.authorisation.AuthenticationResponse;
import lt.codeacademy.rest.entities.Travel;
import lt.codeacademy.rest.entities.User;
import lt.codeacademy.rest.services.TravelService;
import lt.codeacademy.rest.services.UserDetailsServiceImpl;
import lt.codeacademy.rest.utilities.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class TravelsController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsServiceImpl userDetailsServiceImpl;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

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

    @RequestMapping(value = "/auth", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {

        final UserDetails userDetails = userDetailsServiceImpl
                .loadUserByUsername(authenticationRequest.getUsername());
        if (userDetails != null) {
            if (userDetails != null) {

                    final String jwt = jwtUtil.generateToken(userDetails);

                    return ResponseEntity.ok(new AuthenticationResponse(jwt));
            }
        }
        return null;
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ResponseEntity<?> saveUser(@RequestBody User user) throws Exception {
        return ResponseEntity.ok(userDetailsServiceImpl.saveOrUpdateUser(user));
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }



}