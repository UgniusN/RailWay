package lt.codeacademy.rest.services;


import lt.codeacademy.rest.dto.OrderDTO;
import lt.codeacademy.rest.entities.Order;
import lt.codeacademy.rest.entities.User;
import lt.codeacademy.rest.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService{

    @Autowired
    private TravelService travelService;
    @Autowired
    private UserService userService;
    private OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<OrderDTO> getUserOrders(Long userid) {
        User user = userService.getUserById(userid);
        return new OrderDTO().getOrderDTO(orderRepository.findAllByUser(user));
    }

    public Order getOrderByID() {
        return null;
    }

    public Order buildOrder(Long travelid, Long userid) {
        Order order = new Order();
        order.setTravel(travelService.getTravelById(travelid));
        order.setUser(userService.getUserById(userid));
        return orderRepository.save(order);
    }
}
